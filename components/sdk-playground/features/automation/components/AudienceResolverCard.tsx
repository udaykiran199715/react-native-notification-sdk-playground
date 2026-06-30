import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Text } from "react-native";

type Props = {
  audience: string[];
};

export function AudienceResolverCard({ audience }: Props): React.JSX.Element {
  return (
    <Card>
      <Text className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
        Audience
      </Text>

      <Text className="text-neutral-600 dark:text-neutral-300">
        {audience.length === 0 ? "All Users" : audience.join(", ")}
      </Text>
    </Card>
  );
}
