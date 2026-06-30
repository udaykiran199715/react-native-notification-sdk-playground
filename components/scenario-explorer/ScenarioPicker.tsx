import { Picker } from "@react-native-picker/picker";
import React from "react";
import { PlaygroundScenario } from "../sdk-playground/scenarios";

export interface ScenarioPickerProps {
  readonly scenarios: readonly PlaygroundScenario[];

  readonly value: string | undefined;

  readonly onChange: (scenarioId: string) => void;
}

export default function ScenarioPicker({
  scenarios,
  value,
  onChange,
}: ScenarioPickerProps) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue) => onChange(itemValue)}
    >
      {scenarios.map((scenario) => (
        <Picker.Item
          key={scenario.id}
          label={scenario.title}
          value={scenario.id}
        />
      ))}
    </Picker>
  );
}
