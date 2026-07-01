import React from "react";
import { TextInput } from "react-native";

type Props = {
  value: string;

  onChange(value: string): void;
};

export function SearchInput({ value, onChange }: Props): React.JSX.Element {
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder="Search scenarios..."
      className="mb-4 rounded-2xl border border-neutral-300 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
    />
  );
}
