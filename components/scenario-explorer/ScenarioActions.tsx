import React from "react";
import { StyleSheet, View } from "react-native";
import { PlaygroundButton } from "../sdk-playground";

type Props = {
  readonly loading?: boolean;

  readonly onRun: () => void;

  readonly onReset: () => void;

  readonly onCopy: () => void;

  readonly onFormat: () => void;
};

export default function ScenarioActions({
  loading = false,
  onRun,
  onReset,
  onCopy,
  onFormat,
}: Props) {
  return (
    <View style={styles.container}>
      <PlaygroundButton
        title={loading ? "Running..." : "Run Scenario"}
        onPress={onRun}
      />

      <PlaygroundButton title="Reset" onPress={onReset} />

      <PlaygroundButton title="Format JSON" onPress={onFormat} />

      <PlaygroundButton title="Copy Payload" onPress={onCopy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    gap: 12,
  },
});
