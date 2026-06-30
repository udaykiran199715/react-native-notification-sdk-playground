import { DeviceTarget } from "../types/DeviceTarget";
import { NotificationMessage } from "../types/NotificationMessage";
import { NotificationSendResult } from "../types/NotificationSendResult";

export interface INotificationSender {
  send(
    message: NotificationMessage,
    targets: readonly DeviceTarget[],
  ): Promise<NotificationSendResult>;
}
