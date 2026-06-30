import { Card } from "@/components/sdk-playground/common";
import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";
import { Text } from "react-native";

type Props = {
  scenario?: PlaygroundScenario;
};

export function ScenarioNavigation({ scenario }: Props): React.JSX.Element {
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
      <Text className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Navigation
      </Text>

      {scenario.expected.deepLink ? (
        <>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Route
          </Text>

          <Text className="mt-2 rounded-xl bg-neutral-100 p-3 font-mono text-sm dark:bg-neutral-800 dark:text-white">
            {scenario.expected.deepLink}
          </Text>
        </>
      ) : (
        <Text className="text-neutral-500 dark:text-neutral-400">
          This scenario does not trigger navigation.
        </Text>
      )}
    </Card>
  );
}
