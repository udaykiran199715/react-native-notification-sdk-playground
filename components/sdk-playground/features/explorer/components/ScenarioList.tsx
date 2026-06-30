import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  scenarios: PlaygroundScenario[];

  selected?: PlaygroundScenario;

  onSelect(scenario: PlaygroundScenario): void;
};

export function ScenarioList({
  scenarios,
  selected,
  onSelect,
}: Props): React.JSX.Element {
  return (
    <View className="gap-2">
      {scenarios.map((scenario) => (
        <Pressable
          key={scenario.id}
          onPress={() => onSelect(scenario)}
          className={`rounded-xl border p-4 ${
            selected?.id === scenario.id
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
              : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
          }`}
        >
          <Text className="font-semibold text-neutral-900 dark:text-white">
            {scenario.title}
          </Text>

          <Text className="mt-1 text-sm text-neutral-500">
            {scenario.description}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
