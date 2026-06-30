import { Timestamp } from "firebase-admin/firestore";

import { JobStatus } from "../enums/JobStatus";
import { NotificationContent } from "../types/NotificationContent";
import { NotificationPayload } from "../types/NotificationPayload";
import { NotificationRecipient } from "../types/NotificationRecipient";

export interface NotificationJobDocument {
  readonly id: string;

  readonly event: string;

  readonly notification: NotificationContent;

  readonly recipients: NotificationRecipient;

  readonly context: NotificationPayload;

  readonly status: JobStatus;

  readonly retryCount: number;

  readonly processingStartedAt?: Timestamp;

  readonly completedAt?: Timestamp;

  readonly lastError?: string;

  readonly createdAt: Timestamp;

  readonly updatedAt: Timestamp;

  readonly successfulTokens?: number;

  readonly failedTokens?: number;
}
