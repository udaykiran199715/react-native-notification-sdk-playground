import React from "react";
import { Text } from "react-native";

import { Card } from "./Card";

type Props = {
  title: string;

  value: string | number;

  description?: string;
};

export function MetricCard({
  title,
  value,
  description,
}: Props): React.JSX.Element {
  return (
    <Card className="flex-1">
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        {title}
      </Text>

      <Text className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
        {value}
      </Text>

      {description ? (
        <Text className="mt-1 text-xs text-neutral-400">{description}</Text>
      ) : null}
    </Card>
  );
}
