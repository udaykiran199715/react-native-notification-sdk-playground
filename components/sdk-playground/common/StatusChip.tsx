import React from "react";
import { Text, View } from "react-native";

type Props = {
  text: string;
};

export function StatusChip({ text }: Props) {
  return (
    <View className="bg-green-600 px-3 py-1.5 rounded-full self-start">
      <Text className="text-white font-bold">{text}</Text>
    </View>
  );
}
