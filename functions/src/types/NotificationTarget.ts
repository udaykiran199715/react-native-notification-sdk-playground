export interface NotificationTarget {
  readonly token: string;

  readonly platform: "android" | "ios";
}
