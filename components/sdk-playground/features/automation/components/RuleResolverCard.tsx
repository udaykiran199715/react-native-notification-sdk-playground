import { Card } from "@/components/sdk-playground/common";
import React from "react";
import { Text } from "react-native";

type Props = {
  matched: boolean;
};

export function RuleResolverCard({ matched }: Props): React.JSX.Element {
  return (
    <Card>
      <Text className="text-lg font-semibold text-neutral-900 dark:text-white">
        Rule Resolution
      </Text>

      <Text className="mt-3 text-neutral-600 dark:text-neutral-300">
        {matched
          ? "A notification rule matched this event."
          : "No matching notification rule found."}
      </Text>
    </Card>
  );
}
