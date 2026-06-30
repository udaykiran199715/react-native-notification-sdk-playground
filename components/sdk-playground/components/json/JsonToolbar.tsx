import React from "react";
import { Pressable, Text, View } from "react-native";

type Props = {
  onFormat(): void;
  onReset(): void;
  onCopy(): void;
};

function Button({ title, onPress }: { title: string; onPress(): void }) {
  return (
    <Pressable
      onPress={onPress}
      className="rounded-xl bg-neutral-200 px-4 py-2 dark:bg-neutral-800"
    >
      <Text className="font-medium text-neutral-900 dark:text-white">
        {title}
      </Text>
    </Pressable>
  );
}

export function JsonToolbar({
  onFormat,
  onReset,
  onCopy,
}: Props): React.JSX.Element {
  return (
    <View className="mb-4 flex-row gap-2">
      <Button title="Format" onPress={onFormat} />
      <Button title="Reset" onPress={onReset} />
      <Button title="Copy" onPress={onCopy} />
    </View>
  );
}
