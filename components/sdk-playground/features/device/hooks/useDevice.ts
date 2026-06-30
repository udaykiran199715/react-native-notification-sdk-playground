import { Platform } from "react-native";

export function useDevice() {
  return {
    sdkVersion: "1.0.0",

    platform: Platform.OS,

    reactNativeVersion: Platform.constants?.reactNativeVersion
      ? `${Platform.constants.reactNativeVersion.major}.${Platform.constants.reactNativeVersion.minor}.${Platform.constants.reactNativeVersion.patch}`
      : "Unknown",

    deviceId: "Not Available",

    firebaseApp: "Default",

    projectId: "Unknown",

    currentUser: undefined,

    token: undefined,

    permission: "Unknown",
  };
}
