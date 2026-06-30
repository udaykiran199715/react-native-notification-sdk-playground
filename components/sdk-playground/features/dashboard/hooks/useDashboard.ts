import { useMemo } from "react";
import { Platform } from "react-native";

import type { DashboardState } from "../types";

export function useDashboard(): DashboardState {
  return useMemo(
    () => ({
      initialized: true,

      sdkVersion: "1.0.0",

      platform: Platform.OS,

      currentUser: undefined,

      token: undefined,

      statuses: [
        {
          title: "SDK",

          status: "success",

          value: "Initialized",
        },
        {
          title: "Automation",

          status: "success",

          value: "Enabled",
        },
        {
          title: "Firebase",

          status: "success",

          value: "Connected",
        },
        {
          title: "Permission",

          status: "success",

          value: "Granted",
        },
      ],

      metrics: [
        {
          title: "Rules",

          value: 0,
        },
        {
          title: "Scenarios",

          value: 0,
        },
        {
          title: "Notifications",

          value: 0,
        },
      ],
    }),
    [],
  );
}
