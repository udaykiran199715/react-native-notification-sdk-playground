import { DeviceRepository } from "../repositories/DeviceRepository";
import { JobRepository } from "../repositories/JobRepository";
import { FirebaseNotificationSender } from "../services/FirebaseNotificationSender";
import { DeviceTarget } from "../types/DeviceTarget";
import { NotificationMessage } from "../types/NotificationMessage";
import { JobStatus } from "../enums/JobStatus";

export class JobProcessor {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly deviceRepository: DeviceRepository,
    private readonly notificationSender: FirebaseNotificationSender,
  ) {}

  public async process(jobId: string): Promise<void> {
    const job = await this.jobRepository.getJob(jobId);

    if (!job) {
      return;
    }

    const locked = await this.jobRepository.tryMarkProcessing(job.id);

    if (!locked) {
      return;
    }

    try {
      const devices =
        job.recipients.type === "all"
          ? await this.deviceRepository.getAllTokens()
          : await this.deviceRepository.getDevicesByUserIds(
              job.recipients.userIds,
            );

      const targets: DeviceTarget[] = devices.map((device) => ({
        token: device.token,
        platform: device.platform,
      }));

      const message: NotificationMessage = {
        title: job.notification.title,
        body: job.notification.body,
        imageUrl: job.notification.image,
        data: job.notification.data
          ? Object.fromEntries(
              Object.entries(job.notification.data).map(([key, value]) => [
                key,
                value == null ? "" : String(value),
              ]),
            )
          : undefined,
        navigation: job.notification.navigation
          ? {
              route: job.notification.navigation.route,
              params: job.notification.navigation.params
                ? Object.fromEntries(
                    Object.entries(job.notification.navigation.params).map(
                      ([key, value]) => [key, String(value)],
                    ),
                  )
                : undefined,
            }
          : undefined,
      };

      const result = await this.notificationSender.send(message, targets);

      // Remove invalid FCM tokens
      for (const failure of result.failed) {
        if (
          failure.error === "messaging/registration-token-not-registered" ||
          failure.error === "messaging/invalid-registration-token"
        ) {
          await this.deviceRepository.deleteToken(failure.token);
        }
      }

      await this.jobRepository.markCompleted(job.id, result);
    } catch (error) {
      await this.jobRepository.incrementRetryCount(job.id);

      await this.jobRepository.markFailed(
        job.id,
        error instanceof Error ? error.message : "Unknown error",
      );

      throw error;
    }
  }
}
