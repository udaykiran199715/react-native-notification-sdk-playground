import clsx from "clsx";
import React from "react";
import { View, type ViewProps } from "react-native";

type Props = ViewProps & {
  children: React.ReactNode;
  className?: string;
};

export function Card({
  children,
  className,
  ...props
}: Props): React.JSX.Element {
  return (
    <View
      className={clsx(
        "rounded-3xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900",
        className,
      )}
      {...props}
    >
      {children}
    </View>
  );
}
