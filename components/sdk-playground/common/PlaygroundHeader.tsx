import React from "react";
import { Text, View } from "react-native";

export function PlaygroundHeader(): React.JSX.Element {
  return (
    <View className="border-b border-neutral-200 bg-white px-5 py-4 dark:border-neutral-800 dark:bg-neutral-950">
      <Text className="text-xl font-bold">Notification SDK Playground</Text>

      <Text className="mt-1 text-sm text-neutral-500">
        Test rules, payloads and notifications in a safe environment.
      </Text>
    </View>
  );
}
