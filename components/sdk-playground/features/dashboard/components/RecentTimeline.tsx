import { Card } from "@/components/sdk-playground/common";
import { usePlayground } from "@/components/sdk-playground/context";
import React from "react";
import { Text } from "react-native";

export function RecentTimeline(): React.JSX.Element {
  const { state } = usePlayground();

  if (state.timeline.length === 0) {
    return (
      <Card>
        <Text className="text-neutral-500 dark:text-neutral-400">
          Timeline is empty.
        </Text>
      </Card>
    );
  }

  return (
    <>
      {state.timeline.slice(0, 5).map((item) => (
        <Card key={item.id} className="mb-3">
          <Text className="font-semibold text-neutral-900 dark:text-white">
            {item.title}
          </Text>

          <Text className="mt-1 text-neutral-500 dark:text-neutral-400">
            {item.description}
          </Text>
        </Card>
      ))}
    </>
  );
}
