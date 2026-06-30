import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  readonly value: string;

  readonly onChange: (value: string) => void;

  readonly onReset: () => void;

  readonly editable?: boolean;
};

export default function ScenarioPayloadEditor({
  value,
  onChange,
  onReset,
  editable = true,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Payload</Text>

        <Text style={styles.reset} onPress={onReset}>
          Reset
        </Text>
      </View>

      <TextInput
        multiline
        value={value}
        editable={editable}
        onChangeText={onChange}
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        textAlignVertical="top"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
  },

  reset: {
    color: "#007AFF",
    fontWeight: "600",
  },

  input: {
    minHeight: 220,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 12,
    fontFamily: "monospace",
    fontSize: 13,
  },
});
