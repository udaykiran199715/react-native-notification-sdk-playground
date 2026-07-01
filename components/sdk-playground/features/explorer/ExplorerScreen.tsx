import React from "react";

import { Alert, View } from "react-native";
import { Screen, Section, Select } from "../../common";
import type { ScenarioCategory } from "../../scenarios/types/ScenarioCategory";
import { ScenarioTabs } from "./components/ScenarioTabs";
import { ScenarioToolbar } from "./components/ScenarioToolbar";
import { useExplorer } from "./hooks/useExplorer";

export function ExplorerScreen(): React.JSX.Element {
  const explorer = useExplorer();

  return (
    <Screen>
      <Section title="Scenario">
        <Select
          label="Category"
          value={explorer.selectedCategory}
          options={explorer.categories}
          onChange={(value) =>
            explorer.setSelectedCategory(value as ScenarioCategory)
          }
        />

        <Select
          label="Scenario"
          value={explorer.selectedScenarioId}
          options={explorer.scenarioOptions}
          onChange={explorer.setSelectedScenarioId}
        />
      </Section>

      <ScenarioTabs
        scenario={explorer.selectedScenario}
        payload={explorer.payload}
        onPayloadChange={explorer.updatePayload}
      />

      <View className="mt-6">
        <ScenarioToolbar
          onEmit={async () => {
            const result = await explorer.emitScenario();

            if (result.success) {
              Alert.alert("Success", "Notification emitted successfully.");
            } else {
              Alert.alert(
                "Error",
                result.error ?? "Failed to emit notification.",
              );
            }
          }}
          onReset={() => {
            explorer.resetPayload();
          }}
          isEmitting={explorer.isEmitting}
          disableReset={!explorer.isPayloadDirty}
        />
      </View>
    </Screen>
  );
}
