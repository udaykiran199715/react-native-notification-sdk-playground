"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobProcessor = void 0;
class JobProcessor {
    jobRepository;
    deviceRepository;
    notificationSender;
    constructor(jobRepository, deviceRepository, notificationSender) {
        this.jobRepository = jobRepository;
        this.deviceRepository = deviceRepository;
        this.notificationSender = notificationSender;
    }
    async process(jobId) {
        const job = await this.jobRepository.getJob(jobId);
        if (!job) {
            return;
        }
        const locked = await this.jobRepository.tryMarkProcessing(job.id);
        if (!locked) {
            return;
        }
        try {
            const devices = job.recipients.type === "all"
                ? await this.deviceRepository.getAllTokens()
                : await this.deviceRepository.getDevicesByUserIds(job.recipients.userIds);
            const targets = devices.map((device) => ({
                token: device.token,
                platform: device.platform,
            }));
            const message = {
                title: job.notification.title,
                body: job.notification.body,
                imageUrl: job.notification.image,
                data: job.notification.data
                    ? Object.fromEntries(Object.entries(job.notification.data).map(([key, value]) => [
                        key,
                        value == null ? "" : String(value),
                    ]))
                    : undefined,
                navigation: job.notification.navigation
                    ? {
                        route: job.notification.navigation.route,
                        params: job.notification.navigation.params
                            ? Object.fromEntries(Object.entries(job.notification.navigation.params).map(([key, value]) => [key, String(value)]))
                            : undefined,
                    }
                    : undefined,
            };
            const result = await this.notificationSender.send(message, targets);
            // Remove invalid FCM tokens
            for (const failure of result.failed) {
                if (failure.error === "messaging/registration-token-not-registered" ||
                    failure.error === "messaging/invalid-registration-token") {
                    await this.deviceRepository.deleteToken(failure.token);
                }
            }
            await this.jobRepository.markCompleted(job.id, result);
        }
        catch (error) {
            await this.jobRepository.incrementRetryCount(job.id);
            await this.jobRepository.markFailed(job.id, error instanceof Error ? error.message : "Unknown error");
            throw error;
        }
    }
}
exports.JobProcessor = JobProcessor;
