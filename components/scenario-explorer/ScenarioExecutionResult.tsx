import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScenarioExecutionResult as ExecutionResult } from "../sdk-playground/scenarios/types/ScenarioExecutionResult";

type Props = {
  readonly result: ExecutionResult;
};

export default function ScenarioExecutionResult({ result }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Execution Result</Text>

      <Row label="Status" value={result.status.toUpperCase()} />

      {result.event ? <Row label="Event" value={result.event} /> : null}

      {result.duration !== undefined ? (
        <Row label="Duration" value={`${result.duration} ms`} />
      ) : null}

      {result.error ? <Row label="Error" value={result.error} /> : null}
    </View>
  );
}

type RowProps = {
  label: string;
  value: string;
};

function Row({ label, value }: RowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  label: {
    fontWeight: "600",
  },

  value: {
    opacity: 0.8,
    flex: 1,
    textAlign: "right",
    marginLeft: 12,
  },
});
