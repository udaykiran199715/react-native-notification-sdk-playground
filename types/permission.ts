export interface PermissionInfo {
  status: string;
  granted: boolean;
  canRequest: boolean;
  lastUpdated?: string;
}
