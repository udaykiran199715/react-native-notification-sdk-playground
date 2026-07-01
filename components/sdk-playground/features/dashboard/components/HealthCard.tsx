import React from "react";

import { KeyValueCard } from "@/components/sdk-playground/common";

type Props = {
  healthy: boolean;
};

export function HealthCard({ healthy }: Props): React.JSX.Element {
  return (
    <KeyValueCard
      title="SDK Health"
      value={healthy ? "🟢 Healthy" : "🟡 Needs Attention"}
    />
  );
}
