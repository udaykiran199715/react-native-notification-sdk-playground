import React from "react";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

export function InfoRow({ label, value }: Props) {
  return (
    <View className="flex-row justify-between py-2.5">
      <Text className="text-gray-500 font-semibold">{label}</Text>

      <Text selectable className="font-semibold text-gray-900 dark:text-white">
        {value}
      </Text>
    </View>
  );
}
