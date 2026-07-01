import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";

import { PlaygroundScenario } from "@/components/sdk-playground/scenarios";
import { NotificationPayload } from "react-native-notification-sdk";
import { ScenarioNavigation } from "./ScenarioNavigation";
import { ScenarioPayload } from "./ScenarioPayload";
import { ScenarioRule } from "./ScenarioRule";

type Props = {
  scenario?: PlaygroundScenario;
  payload?: NotificationPayload;
  onPayloadChange?: (payload: NotificationPayload) => void;
};

type Tab = "payload" | "rule" | "navigation";

export function ScenarioTabs({
  scenario,
  payload,
  onPayloadChange,
}: Props): React.JSX.Element {
  const [tab, setTab] = useState<Tab>("payload");

  return (
    <>
      <View className="mb-4 flex-row gap-2">
        <TabButton
          title="Payload"
          active={tab === "payload"}
          onPress={() => setTab("payload")}
        />

        <TabButton
          title="Rule"
          active={tab === "rule"}
          onPress={() => setTab("rule")}
        />

        <TabButton
          title="Navigation"
          active={tab === "navigation"}
          onPress={() => setTab("navigation")}
        />
      </View>

      {tab === "payload" && payload && onPayloadChange && (
        <ScenarioPayload payload={payload} onChange={onPayloadChange} />
      )}

      {tab === "rule" && <ScenarioRule scenario={scenario} />}

      {tab === "navigation" && <ScenarioNavigation scenario={scenario} />}
    </>
  );
}

function TabButton({
  title,
  active,
  onPress,
}: {
  title: string;
  active: boolean;
  onPress(): void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`rounded-xl px-4 py-2 ${
        active ? "bg-blue-600" : "bg-neutral-200 dark:bg-neutral-800"
      }`}
    >
      <Text
        className={
          active
            ? "font-semibold text-white"
            : "font-medium text-neutral-900 dark:text-white"
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}
