import { JsonEditor } from "@/components/sdk-playground/components/json";
import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import React from "react";

type Props = {
  scenario?: PlaygroundScenario;
};

export function ScenarioPayload({ scenario }: Props): React.JSX.Element | null {
  if (!scenario) {
    return null;
  }

  return <JsonEditor value={scenario.payload} />;
}
