import { Card } from "@/components/sdk-playground/common";
import { usePlayground } from "@/components/sdk-playground/context";
import React from "react";
import { Text } from "react-native";

export function RecentNotifications(): React.JSX.Element {
  const { state } = usePlayground();

  if (state.notificationHistory.length === 0) {
    return (
      <Card>
        <Text className="text-neutral-500 dark:text-neutral-400">
          No notifications received yet.
        </Text>
      </Card>
    );
  }

  return (
    <>
      {state.notificationHistory.slice(0, 5).map((notification) => (
        <Card key={notification.id} className="mb-3">
          <Text className="font-semibold text-neutral-900 dark:text-white">
            {notification.title}
          </Text>

          <Text className="mt-1 text-neutral-500 dark:text-neutral-400">
            {notification.body}
          </Text>
        </Card>
      ))}
    </>
  );
}
