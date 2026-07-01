import React from "react";
import { Text } from "react-native";

type Props = {
  title?: string;
};

export function NotificationHeader({ title }: Props): React.JSX.Element {
  return (
    <Text className="text-lg font-bold text-neutral-900 dark:text-white">
      {title || "Notification Title"}
    </Text>
  );
}
