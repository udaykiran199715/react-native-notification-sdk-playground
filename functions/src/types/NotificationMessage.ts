export interface NotificationMessage {
  readonly title: string;
  readonly body: string;
  readonly imageUrl?: string;
  readonly data?: Record<string, string>;
  readonly navigation?: {
    readonly route: string;
    readonly params?: Record<string, string>;
  };
}
