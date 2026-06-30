import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Text, View } from "react-native";

import type { NotificationPayload } from "react-native-notification-sdk";

type Props = {
  payload: NotificationPayload;
};

export function NotificationMetadata({ payload }: Props): React.JSX.Element {
  return (
    <Card>
      <Text className="mb-4 text-lg font-semibold text-neutral-900 dark:text-white">
        Notification Metadata
      </Text>

      <Row label="Badge" value={payload.badge} />

      <Row label="Sound" value={payload.sound} />

      <Row label="From" value={payload.from} />

      <Row label="Collapse Key" value={payload.collapseKey} />

      <Row label="Mutable Content" value={String(payload.mutableContent)} />

      <Row label="Content Available" value={String(payload.contentAvailable)} />

      <Row
        label="Sent Time"
        value={
          payload.sentTime
            ? new Date(payload.sentTime).toLocaleString()
            : undefined
        }
      />
    </Card>
  );
}

function Row({ label, value }: { label: string; value?: string | number }) {
  if (value === undefined || value === null) {
    return null;
  }

  return (
    <View className="mb-3 flex-row justify-between">
      <Text className="text-neutral-500 dark:text-neutral-400">{label}</Text>

      <Text className="font-medium text-neutral-900 dark:text-white">
        {String(value)}
      </Text>
    </View>
  );
}
