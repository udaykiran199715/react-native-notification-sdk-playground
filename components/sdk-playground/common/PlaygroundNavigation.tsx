import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

type Tab = "dashboard" | "explorer" | "device" | "settings";

const TABS: { key: Tab; label: string }[] = [
  { key: "dashboard", label: "Dashboard" },
  { key: "explorer", label: "Explorer" },
  { key: "device", label: "Device" },
  { key: "settings", label: "Settings" },
];

type Props = {
  value: Tab;
  onChange(tab: Tab): void;
};

export function PlaygroundNavigation({
  value,
  onChange,
}: Props): React.JSX.Element {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950"
      contentContainerStyle={{
        paddingHorizontal: 16,
      }}
    >
      {TABS.map((tab) => {
        const active = value === tab.key;

        return (
          <Pressable
            key={tab.key}
            onPress={() => onChange(tab.key)}
            className="mr-8 h-12 items-center justify-center"
          >
            <Text
              className={`text-sm font-semibold ${
                active
                  ? "text-blue-600"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {tab.label}
            </Text>

            <View
              className={`absolute bottom-0 h-0.5 w-full rounded-full ${
                active ? "bg-blue-600" : "bg-transparent"
              }`}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
