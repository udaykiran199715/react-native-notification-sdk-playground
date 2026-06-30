import { ScenarioRegistry } from "@/components/sdk-playground/scenarios";
import { useMemo, useState } from "react";

export function useAutomation() {
  const scenarios = ScenarioRegistry.getAll();
  const [selectedId, setSelectedId] = useState(scenarios[0]?.id);

  const scenario = useMemo(
    () => scenarios.find((item) => item.id === selectedId),
    [selectedId],
  );

  return {
    scenarios: scenarios,

    scenario,

    selectedId,

    setSelectedId,
  };
}
