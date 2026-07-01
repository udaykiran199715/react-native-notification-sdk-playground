import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";

type Props = {
  readonly onEmit: () => void | Promise<void>;
  readonly onReset: () => void;

  readonly isEmitting?: boolean;
  readonly disableReset?: boolean;
};

export function ScenarioToolbar({
  onEmit,
  onReset,
  isEmitting = false,
  disableReset = false,
}: Props): React.JSX.Element {
  return (
    <View className="flex-row gap-3">
      <Pressable
        disabled={isEmitting}
        onPress={onEmit}
        className={`flex-1 items-center justify-center rounded-xl py-4 ${
          isEmitting ? "bg-blue-400" : "bg-blue-600"
        }`}
      >
        {isEmitting ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="font-semibold text-white">Emit Notification</Text>
        )}
      </Pressable>

      <Pressable
        disabled={disableReset}
        onPress={onReset}
        className={`flex-1 items-center justify-center rounded-xl py-4 ${
          disableReset
            ? "bg-neutral-100 dark:bg-neutral-900"
            : "bg-neutral-200 dark:bg-neutral-800"
        }`}
      >
        <Text
          className={`font-semibold ${
            disableReset
              ? "text-neutral-400 dark:text-neutral-600"
              : "text-neutral-900 dark:text-white"
          }`}
        >
          Reset Payload
        </Text>
      </Pressable>
    </View>
  );
}
