import { Picker } from "@react-native-picker/picker";
import React from "react";
import { ScenarioCategory } from "../sdk-playground/scenarios/types/ScenarioCategory";

export interface ScenarioCategoryPickerProps {
  readonly categories: readonly ScenarioCategory[];

  readonly value: ScenarioCategory | undefined;

  readonly onChange: (category: ScenarioCategory) => void;
}

export default function ScenarioCategoryPicker({
  categories,
  value,
  onChange,
}: ScenarioCategoryPickerProps) {
  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue) => onChange(itemValue as ScenarioCategory)}
    >
      {categories.map((category) => (
        <Picker.Item key={category} label={category} value={category} />
      ))}
    </Picker>
  );
}
