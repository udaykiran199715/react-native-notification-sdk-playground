import type { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  scenarios: readonly PlaygroundScenario[];

  selectedId?: string;

  onSelect(id: string): void;
};

export function ScenarioSelector({
  scenarios,
  selectedId,
  onSelect,
}: Props): React.JSX.Element {
  return (
    <View className="gap-2">
      {scenarios.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => onSelect(item.id)}
          className={`rounded-xl border p-4 ${
            selectedId === item.id
              ? "border-blue-500 bg-blue-50 dark:bg-blue-950"
              : "border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
          }`}
        >
          <Text className="font-semibold text-neutral-900 dark:text-white">
            {item.title}
          </Text>

          <Text className="text-sm text-neutral-500 dark:text-neutral-400">
            {item.category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
