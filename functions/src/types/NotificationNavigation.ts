export interface NotificationNavigation {
  readonly route: string;

  readonly params?: Readonly<Record<string, string>>;
}
