import { Card } from "@/components/sdk-playground/common";
import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";
import { Text, View } from "react-native";

type Props = {
  scenario?: PlaygroundScenario;
};

export function ScenarioRule({ scenario }: Props): React.JSX.Element {
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
        Expected Rule Behaviour
      </Text>

      <View className="gap-4">
        <View>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Event
          </Text>

          <Text className="mt-1 font-mono text-sm text-neutral-900 dark:text-white">
            {scenario.event}
          </Text>
        </View>

        <View>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Audience
          </Text>

          <Text className="mt-1 text-neutral-900 dark:text-white">
            {scenario.expected.audience}
          </Text>
        </View>

        <View>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Notification
          </Text>

          <Text className="mt-1 text-neutral-900 dark:text-white">
            {scenario.expected.notification ? "Enabled" : "Disabled"}
          </Text>
        </View>

        <View>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Image
          </Text>

          <Text className="mt-1 text-neutral-900 dark:text-white">
            {scenario.expected.image ? "Yes" : "No"}
          </Text>
        </View>

        <View>
          <Text className="text-xs font-semibold uppercase text-neutral-400">
            Actions
          </Text>

          <Text className="mt-1 text-neutral-900 dark:text-white">
            {scenario.expected.actions ? "Yes" : "No"}
          </Text>
        </View>
      </View>
    </Card>
  );
}
