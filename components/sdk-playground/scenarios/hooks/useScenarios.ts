import { useMemo, useState } from "react";

import { ScenarioRegistry } from "../ScenarioRegistry";
import { ScenarioCategory } from "../types/ScenarioCategory";

export function useScenarios() {
  const categories = useMemo(() => ScenarioRegistry.getCategories(), []);

  const [category, setCategory] = useState<ScenarioCategory>(categories[0]);

  const scenarios = useMemo(
    () => ScenarioRegistry.getByCategory(category),
    [category],
  );

  const [scenarioId, setScenarioId] = useState(scenarios[0]?.id);

  const scenario = useMemo(
    () => ScenarioRegistry.getById(scenarioId),
    [scenarioId],
  );

  const selectCategory = (value: ScenarioCategory) => {
    setCategory(value);

    const items = ScenarioRegistry.getByCategory(value);

    setScenarioId(items[0]?.id);
  };

  const selectScenario = (id: string) => {
    setScenarioId(id);
  };

  return {
    categories,

    category,

    selectCategory,

    scenarios,

    scenario,

    scenarioId,

    selectScenario,
  };
}
