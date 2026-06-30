export interface NotificationRecipient {
  readonly type: "all" | "users";

  /**
   * Empty when type === 'all'
   */
  readonly userIds: readonly string[];
}
