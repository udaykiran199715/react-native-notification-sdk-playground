import { Timestamp } from "firebase-admin/firestore";

export interface DeviceDocument {
  readonly token: string;

  readonly userId: string | null;

  readonly platform: "android" | "ios";

  readonly createdAt: Timestamp;

  readonly updatedAt: Timestamp;
}
