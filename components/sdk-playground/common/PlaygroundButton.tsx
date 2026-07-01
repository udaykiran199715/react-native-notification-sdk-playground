import React from "react";
import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function PlaygroundButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-blue-600 py-3.5 rounded-xl mt-2.5"
    >
      <Text className="text-center text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
}
