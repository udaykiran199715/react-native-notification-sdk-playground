export interface NotificationSendFailure {
  readonly token: string;

  readonly error: string;
}

export interface NotificationSendResult {
  readonly success: readonly string[];

  readonly failed: readonly NotificationSendFailure[];
}
