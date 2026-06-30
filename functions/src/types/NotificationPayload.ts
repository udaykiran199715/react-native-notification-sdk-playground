export type NotificationValue =
  | string
  | number
  | boolean
  | null
  | readonly NotificationValue[]
  | {
      readonly [key: string]: NotificationValue;
    };

export type NotificationPayload = Readonly<Record<string, NotificationValue>>;
