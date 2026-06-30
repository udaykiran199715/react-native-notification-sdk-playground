import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlaygroundScenario } from "../sdk-playground/scenarios";

type Props = {
  readonly scenario?: PlaygroundScenario;
};

export default function ScenarioExpectedResult({ scenario }: Props) {
  if (!scenario) {
    return null;
  }

  const { expected } = scenario;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expected Result</Text>

      <Item label="Notification" value={expected.notification ? "Yes" : "No"} />

      <Item label="Audience" value={expected.audience} />

      {expected.image !== undefined && (
        <Item label="Rich Image" value={expected.image ? "Yes" : "No"} />
      )}

      {expected.deepLink && (
        <Item label="Deep Link" value={expected.deepLink} />
      )}

      {expected.actions !== undefined && (
        <Item label="Actions" value={expected.actions ? "Yes" : "No"} />
      )}
    </View>
  );
}

type ItemProps = {
  label: string;
  value: string;
};

function Item({ label, value }: ItemProps) {
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
    marginBottom: 10,
  },

  label: {
    fontWeight: "600",
  },

  value: {
    opacity: 0.8,
  },
});
