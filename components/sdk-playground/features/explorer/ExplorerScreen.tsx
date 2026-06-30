import React from "react";
import { View } from "react-native";

import { Screen, Section } from "../../common";
import { CategoryList } from "./components/CategoryList";
import { ScenarioDetails } from "./components/ScenarioDetails";
import { ScenarioList } from "./components/ScenarioList";
import { ScenarioTabs } from "./components/ScenarioTabs";
import { ScenarioToolbar } from "./components/ScenarioToolbar";
import { SearchInput } from "./components/SearchInput";
import { useExplorer } from "./hooks/useExplorer";

export function ExplorerScreen(): React.JSX.Element {
  const explorer = useExplorer();

  return (
    <Screen>
      <SearchInput value={explorer.search} onChange={explorer.setSearch} />

      <Section title="Categories">
        <CategoryList
          categories={explorer.categories}
          selected={explorer.selectedCategory}
          onSelect={explorer.setSelectedCategory}
        />
      </Section>

      <Section title="Scenarios">
        <ScenarioList
          scenarios={explorer.scenarios}
          selected={explorer.selectedScenario}
          onSelect={explorer.setSelectedScenario}
        />
      </Section>

      <Section title="Scenario">
        <ScenarioDetails scenario={explorer.selectedScenario} />
      </Section>

      <ScenarioTabs scenario={explorer.selectedScenario} />

      <View className="mt-6">
        <ScenarioToolbar onEmit={() => {}} onReset={() => {}} />
      </View>
    </Screen>
  );
}
