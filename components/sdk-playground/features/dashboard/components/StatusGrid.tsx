import React from "react";
import { Text, View } from "react-native";

import { Card } from "@/components/sdk-playground/common";
import { StatusBadge } from "@/components/sdk-playground/common/StatusBadge";
import type { StatusItem } from "../types";

type Props = {
  items: StatusItem[];
};

export function StatusGrid({ items }: Props): React.JSX.Element {
  return (
    <View className="gap-3">
      {items.map((item) => (
        <Card key={item.title}>
          <View className="flex-row items-center justify-between">
            <Text className="font-semibold text-neutral-900 dark:text-white">
              {item.title}
            </Text>

            <View className="items-end">
              <StatusBadge status={item.status} />

              <Text className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                {item.value}
              </Text>
            </View>
          </View>
        </Card>
      ))}
    </View>
  );
}
