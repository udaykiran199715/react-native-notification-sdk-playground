import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Pressable, Text } from "react-native";

type Props = {
  title: string;

  description?: string;

  onPress(): void;

  destructive?: boolean;
};

export function ActionItem({
  title,
  description,
  onPress,
  destructive,
}: Props): React.JSX.Element {
  return (
    <Pressable onPress={onPress}>
      <Card className="mb-3">
        <Text
          className={`text-lg font-semibold ${
            destructive ? "text-red-600" : "text-neutral-900 dark:text-white"
          }`}
        >
          {title}
        </Text>

        {description ? (
          <Text className="mt-2 text-neutral-500 dark:text-neutral-400">
            {description}
          </Text>
        ) : null}
      </Card>
    </Pressable>
  );
}
