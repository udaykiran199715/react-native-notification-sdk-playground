import { BatchResponse, MulticastMessage } from "firebase-admin/messaging";

import { FirebaseAdmin } from "../firebase/FirebaseAdmin";
import { INotificationSender } from "./INotificationSender";

import { DeviceTarget } from "../types/DeviceTarget";
import { NotificationMessage } from "../types/NotificationMessage";
import {
  NotificationSendFailure,
  NotificationSendResult,
} from "../types/NotificationSendResult";

export class FirebaseNotificationSender implements INotificationSender {
  public async send(
    message: NotificationMessage,
    targets: readonly DeviceTarget[],
  ): Promise<NotificationSendResult> {
    {
      if (targets.length === 0) {
        return {
          success: [],
          failed: [],
        };
      }

      const fcmData: Record<string, string> = {
        ...(message.data ?? {}),
      };

      if (message.navigation) {
        fcmData["_navigation_route"] = message.navigation.route;
        if (message.navigation.params) {
          fcmData["_navigation_params"] = JSON.stringify(
            message.navigation.params,
          );
        }
      }

      const multicast: MulticastMessage = {
        tokens: targets.map((target) => target.token),
        notification: {
          title: message.title,
          body: message.body,
          imageUrl: message.imageUrl,
        },
        data: Object.keys(fcmData).length > 0 ? fcmData : undefined,
      };

      const response: BatchResponse =
        await FirebaseAdmin.messaging().sendEachForMulticast(multicast);

      const success: string[] = [];
      const failed: NotificationSendFailure[] = [];

      response.responses.forEach((result, index) => {
        const token = targets[index].token;

        if (result.success) {
          success.push(token);
          return;
        }

        failed.push({
          token,
          error: result.error?.code ?? "unknown-error",
        });
      });

      return {
        success,
        failed,
      };
    }
  }
}
