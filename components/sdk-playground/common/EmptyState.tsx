import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;

  description?: string;
};

export function EmptyState({ title, description }: Props): React.JSX.Element {
  return (
    <View className="items-center justify-center rounded-3xl border border-dashed border-neutral-300 p-8 dark:border-neutral-700">
      <Text className="text-lg font-semibold text-neutral-900 dark:text-white">
        {title}
      </Text>

      {description ? (
        <Text className="mt-2 text-center text-neutral-500 dark:text-neutral-400">
          {description}
        </Text>
      ) : null}
    </View>
  );
}
