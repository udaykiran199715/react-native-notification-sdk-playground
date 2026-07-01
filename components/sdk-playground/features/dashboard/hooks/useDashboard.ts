import { useMemo } from "react";

import { ScenarioRegistry } from "@/components/sdk-playground/scenarios";

import { Rules } from "@/components/sdk-playground/models/Rules";
import { useDevice } from "../../device/hooks/useDevice";

export function useDashboard() {
  const device = useDevice();

  const statistics = useMemo(
    () => ({
      categories: ScenarioRegistry.getCategories().length,
      scenarios: ScenarioRegistry.getAll().length,
      rules: Rules.length,
    }),
    [],
  );

  const healthy = device.permission === "authorized" && !!device.token;

  return {
    sdkVersion: device.sdkVersion,

    permission: device.permission,

    currentUser: device.currentUser,

    token: device.token,

    statistics,

    healthy,
  };
}
