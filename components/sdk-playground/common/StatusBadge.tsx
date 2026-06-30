import clsx from "clsx";
import React from "react";
import { Text } from "react-native";

export type StatusType = "success" | "warning" | "error" | "unknown";

type Props = {
  status: StatusType;
};

const STATUS = {
  success: {
    label: "Success",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  },
  warning: {
    label: "Warning",
    className:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  error: {
    label: "Error",
    className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  unknown: {
    label: "Unknown",
    className:
      "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
  },
} as const;

export function StatusBadge({ status }: Props): React.JSX.Element {
  const item = STATUS[status];

  return (
    <Text
      className={clsx(
        "rounded-full px-3 py-1 text-xs font-semibold",
        item.className,
      )}
    >
      {item.label}
    </Text>
  );
}
