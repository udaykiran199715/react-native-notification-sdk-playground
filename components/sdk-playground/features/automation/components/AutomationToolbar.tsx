import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onRun(): void;
};

export function AutomationToolbar({ onRun }: Props): React.JSX.Element {
  return (
    <View className="flex-row">
      <Pressable onPress={onRun} className="flex-1 rounded-xl bg-blue-600 py-4">
        <Text className="text-center font-semibold text-white">
          Run Automation
        </Text>
      </Pressable>
    </View>
  );
}
