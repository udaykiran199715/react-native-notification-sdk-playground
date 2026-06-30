import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Text } from "react-native";

export function AboutCard(): React.JSX.Element {
  return (
    <Card>
      <Text className="text-xl font-bold text-neutral-900 dark:text-white">
        React Native Notification SDK
      </Text>

      <Text className="mt-2 text-neutral-500 dark:text-neutral-400">
        Playground for testing notification rules, automation, payload
        generation, and deep linking.
      </Text>

      <Text className="mt-4 text-xs text-neutral-400">Version 1.0.0</Text>
    </Card>
  );
}
