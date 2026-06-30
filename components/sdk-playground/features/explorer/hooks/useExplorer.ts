import { ScenarioRegistry } from "@/components/sdk-playground/scenarios";
import { useMemo, useState } from "react";

export function useExplorer() {
  const [selectedCategory, setSelectedCategory] = useState("E-Commerce");

  const [search, setSearch] = useState("");

  const categories = useMemo(
    () =>
      [
        ...new Set(ScenarioRegistry.getAll().map((item) => item.category)),
      ].sort(),
    [],
  );

  const scenarios = useMemo(() => {
    return ScenarioRegistry.getAll().filter(
      (item) =>
        item.category === selectedCategory &&
        item.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [selectedCategory, search]);

  const [selectedScenario, setSelectedScenario] = useState(scenarios[0]);

  return {
    categories,

    scenarios,

    selectedCategory,

    setSelectedCategory,

    selectedScenario,

    setSelectedScenario,

    search,

    setSearch,
  };
}
