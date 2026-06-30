import { Card } from "@/components/sdk-playground/common";
import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  scenario?: PlaygroundScenario;
};

export function ScenarioDetails({ scenario }: Props): React.JSX.Element {
  if (!scenario) {
    return (
      <Card>
        <Text className="text-neutral-500 dark:text-neutral-400">
          Select a scenario
        </Text>
      </Card>
    );
  }

  return (
    <Card>
      <Text className="text-2xl font-bold text-neutral-900 dark:text-white">
        {scenario.title}
      </Text>

      <Text className="mt-2 text-neutral-500 dark:text-neutral-400">
        {scenario.description}
      </Text>

      <View className="mt-6">
        <Text className="text-xs font-semibold uppercase text-neutral-400">
          EVENT
        </Text>

        <Text className="mt-1 rounded-lg bg-neutral-100 px-3 py-2 font-mono text-sm dark:bg-neutral-800 dark:text-white">
          {scenario.event}
        </Text>
      </View>
    </Card>
  );
}
