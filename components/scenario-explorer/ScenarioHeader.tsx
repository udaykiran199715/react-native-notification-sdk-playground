import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
};

export default function ScenarioHeader({ title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    opacity: 0.7,
  },
});
