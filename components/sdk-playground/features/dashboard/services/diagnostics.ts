import { Platform } from "react-native";

export interface Diagnostics {
  sdkVersion: string;
  platform: string;
  initialized: boolean;
  automation: boolean;
  firebase: boolean;
}

export function getDiagnostics(): Diagnostics {
  return {
    sdkVersion: "1.0.0",
    platform: Platform.OS,
    initialized: true,
    automation: true,
    firebase: true,
  };
}
