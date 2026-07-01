import React from "react";

import { KeyValueCard } from "@/components/sdk-playground/common";

type Props = {
  categories: number;
  scenarios: number;
  rules: number;
};

export function StatisticsCard({
  categories,
  scenarios,
  rules,
}: Props): React.JSX.Element {
  return (
    <>
      <KeyValueCard title="Categories" value={categories} />

      <KeyValueCard title="Scenarios" value={scenarios} />

      <KeyValueCard title="Rules" value={rules} />
    </>
  );
}
