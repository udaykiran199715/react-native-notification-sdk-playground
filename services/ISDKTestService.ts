import { PermissionInfo } from "../types/permission";
import { SDKEnvironment } from "../types/playground";

export interface ISDKTestService {
  getEnvironment(): Promise<SDKEnvironment>;

  getPermissionStatus(): Promise<PermissionInfo>;

  requestPermission(): Promise<PermissionInfo>;

  openSettings(): Promise<void>;

  getToken(): Promise<string | undefined>;

  refreshToken(): Promise<string | undefined>;

  registerDevice(): Promise<boolean>;

  unregisterDevice(): Promise<boolean>;

  createNotificationJob(): Promise<boolean>;
}
