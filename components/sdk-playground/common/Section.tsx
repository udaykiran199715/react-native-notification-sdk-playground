import React from "react";
import { Text, View } from "react-native";

type Props = {
  title: string;

  subtitle?: string;

  right?: React.ReactNode;

  children: React.ReactNode;
};

export function Section({
  title,
  subtitle,
  right,
  children,
}: Props): React.JSX.Element {
  return (
    <View className="mb-6">
      <View className="mb-4 flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-xl font-bold text-neutral-900 dark:text-white">
            {title}
          </Text>

          {subtitle ? (
            <Text className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </Text>
          ) : null}
        </View>

        {right}
      </View>

      {children}
    </View>
  );
}
