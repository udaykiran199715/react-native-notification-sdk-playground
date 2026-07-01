import React from "react";
import { ActivityIndicator, Pressable, Text, ViewStyle } from "react-native";

type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  readonly title: string;
  readonly onPress: () => void | Promise<void>;

  readonly variant?: ButtonVariant;

  readonly disabled?: boolean;

  readonly loading?: boolean;

  readonly className?: string;

  readonly style?: ViewStyle;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
  style,
}: ButtonProps): React.JSX.Element {
  const background =
    variant === "primary"
      ? "bg-blue-600"
      : variant === "danger"
        ? "bg-red-600"
        : "bg-neutral-200 dark:bg-neutral-800";

  const textColor =
    variant === "primary" || variant === "danger"
      ? "text-white"
      : "text-neutral-900 dark:text-white";

  return (
    <Pressable
      disabled={disabled || loading}
      onPress={onPress}
      style={style}
      className={`h-12 items-center justify-center rounded-xl ${
        disabled ? "opacity-50" : ""
      } ${background} ${className}`}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className={`text-base font-semibold ${textColor}`}>{title}</Text>
      )}
    </Pressable>
  );
}
