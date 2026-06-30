export interface InfoItem {
  label: string;
  value: string;
}

export type StatusType = "success" | "warning" | "error" | "info";

export interface SDKEnvironment {
  sdkVersion: string;

  reactNativeVersion: string;

  expoVersion: string;

  appVersion: string;

  platform: string;

  osVersion: string;

  environment: string;
}
