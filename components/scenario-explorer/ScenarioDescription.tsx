import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { PlaygroundScenario } from "../sdk-playground/scenarios";

type Props = {
  readonly scenario?: PlaygroundScenario;
};

export default function ScenarioDescription({ scenario }: Props) {
  if (!scenario) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>No scenario selected.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{scenario.title}</Text>

      <Text style={styles.description}>{scenario.description}</Text>

      {scenario.tags?.length ? (
        <>
          <Text style={styles.section}>Tags</Text>

          <View style={styles.tags}>
            {scenario.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  description: {
    marginTop: 8,
    lineHeight: 22,
    opacity: 0.8,
  },

  section: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: "600",
  },

  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  tag: {
    marginRight: 8,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: "#E8F0FE",
  },

  tagText: {
    fontSize: 12,
    fontWeight: "600",
  },

  empty: {
    opacity: 0.6,
  },
});
