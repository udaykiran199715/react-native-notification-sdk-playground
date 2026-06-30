import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onEmit(): void;

  onReset(): void;
};

export function ScenarioToolbar({ onEmit, onReset }: Props): React.JSX.Element {
  return (
    <View className="flex-row gap-3">
      <Pressable
        onPress={onEmit}
        className="flex-1 rounded-2xl bg-blue-600 py-4"
      >
        <Text className="text-center font-semibold text-white">Emit Event</Text>
      </Pressable>

      <Pressable
        onPress={onReset}
        className="flex-1 rounded-2xl bg-neutral-200 py-4 dark:bg-neutral-800"
      >
        <Text className="text-center font-semibold text-neutral-900 dark:text-white">
          Reset Payload
        </Text>
      </Pressable>
    </View>
  );
}
