import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Text, View } from "react-native";

import type { NotificationPayload } from "react-native-notification-sdk";

type Props = {
  payload: NotificationPayload;
};

export function NotificationNavigation({
  payload,
}: Props): React.JSX.Element | null {
  if (!payload.navigation) {
    return null;
  }

  return (
    <Card>
      <Text className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Navigation
      </Text>

      <Text className="font-mono text-blue-600 dark:text-blue-400">
        {payload.navigation.route}
      </Text>

      {payload.navigation.params ? (
        <View className="mt-4">
          {Object.entries(payload.navigation.params).map(([key, value]) => (
            <View key={key} className="flex-row justify-between py-2">
              <Text className="text-neutral-500 dark:text-neutral-400">
                {key}
              </Text>

              <Text className="font-medium text-neutral-900 dark:text-white">
                {String(value)}
              </Text>
            </View>
          ))}
        </View>
      ) : null}
    </Card>
  );
}
