import React from "react";
import { Text } from "react-native";

import { Card } from "./Card";

type Props = {
  title: string;
  value?: string | number | null;
  numberOfLines?: number;
};

export function KeyValueCard({
  title,
  value,
  numberOfLines = 2,
}: Props): React.JSX.Element {
  return (
    <Card>
      <Text className="text-sm text-neutral-500 dark:text-neutral-400">
        {title}
      </Text>

      <Text
        numberOfLines={numberOfLines}
        className="mt-2 text-base font-semibold text-neutral-900 dark:text-white"
      >
        {value || "--"}
      </Text>
    </Card>
  );
}
