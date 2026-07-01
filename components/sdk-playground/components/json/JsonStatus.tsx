import React from "react";
import { Text } from "react-native";

type Props = {
  valid: boolean;
};

export function JsonStatus({ valid }: Props): React.JSX.Element {
  return (
    <Text
      className={`text-xs font-semibold ${
        valid
          ? "text-green-600 dark:text-green-400"
          : "text-red-600 dark:text-red-400"
      }`}
    >
      {valid ? "✓ Valid JSON" : "✗ Invalid JSON"}
    </Text>
  );
}
