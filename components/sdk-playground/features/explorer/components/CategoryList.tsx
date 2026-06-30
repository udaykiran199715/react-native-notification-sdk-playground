import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  categories: string[];

  selected: string;

  onSelect(category: string): void;
};

export function CategoryList({
  categories,
  selected,
  onSelect,
}: Props): React.JSX.Element {
  return (
    <View className="mb-4 gap-2">
      {categories.map((category) => (
        <Pressable
          key={category}
          onPress={() => onSelect(category)}
          className={`rounded-xl px-4 py-3 ${
            selected === category
              ? "bg-blue-600"
              : "bg-neutral-200 dark:bg-neutral-800"
          }`}
        >
          <Text
            className={`font-medium ${
              selected === category
                ? "text-white"
                : "text-neutral-900 dark:text-white"
            }`}
          >
            {category}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}
