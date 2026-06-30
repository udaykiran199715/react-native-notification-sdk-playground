import React from "react";
import { Text, View } from "react-native";

type Props = {
  version: string;
};

export function DashboardHeader({ version }: Props): React.JSX.Element {
  return (
    <View className="mb-8">
      <Text className="text-3xl font-bold text-neutral-900 dark:text-white">
        Notification SDK
      </Text>

      <Text className="mt-1 text-base text-neutral-500 dark:text-neutral-400">
        Version {version}
      </Text>
    </View>
  );
}
