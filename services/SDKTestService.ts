import Constants from "expo-constants";
import { Linking, Platform } from "react-native";

import { PermissionInfo } from "../types/permission";
import { SDKEnvironment } from "../types/playground";
import { ISDKTestService } from "./ISDKTestService";

export class SDKTestService implements ISDKTestService {
  async getEnvironment(): Promise<SDKEnvironment> {
    return {
      sdkVersion: "1.0.0",

      expoVersion: Constants.expoConfig?.sdkVersion ?? "-",

      appVersion: Constants.expoConfig?.version ?? "-",

      platform: Platform.OS,

      osVersion: Platform.Version.toString(),

      environment: __DEV__ ? "Development" : "Production",

      reactNativeVersion: "-",
    };
  }

  async getPermissionStatus(): Promise<PermissionInfo> {
    return {
      status: "UNKNOWN",

      granted: false,

      canRequest: true,

      lastUpdated: new Date().toLocaleTimeString(),
    };
  }

  async requestPermission(): Promise<PermissionInfo> {
    return this.getPermissionStatus();
  }

  async openSettings(): Promise<void> {
    await Linking.openSettings();
  }

  async getToken(): Promise<string | undefined> {
    return undefined;
  }

  async refreshToken(): Promise<string | undefined> {
    return undefined;
  }

  async registerDevice(): Promise<boolean> {
    return false;
  }

  async unregisterDevice(): Promise<boolean> {
    return false;
  }

  async createNotificationJob(): Promise<boolean> {
    return false;
  }
}

export const sdkTestService = new SDKTestService();
