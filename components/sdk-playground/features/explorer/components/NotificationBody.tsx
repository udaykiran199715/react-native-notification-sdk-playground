import React from "react";
import { Text } from "react-native";

type Props = {
  body?: string;
};

export function NotificationBody({ body }: Props): React.JSX.Element {
  return (
    <Text className="mt-2 text-neutral-600 dark:text-neutral-300">
      {body || "Notification body"}
    </Text>
  );
}
