import React from "react";

import { Screen, Section } from "../../common";
import { AboutCard } from "./components/AboutCard";
import { ActionItem } from "./components/ActionItem";
import { useSettings } from "./hooks/useSettings";

export function SettingsScreen(): React.JSX.Element {
  const settings = useSettings();

  return (
    <Screen>
      <Section title="Playground">
        <ActionItem
          title="Reset Playground"
          description="Reset all Playground state."
          onPress={settings.resetPlayground}
        />

        <ActionItem
          title="Clear Notifications"
          description="Remove notification history."
          onPress={settings.clearNotifications}
        />

        <ActionItem
          title="Clear Timeline"
          description="Remove timeline history."
          onPress={settings.clearTimeline}
        />
      </Section>

      <Section title="About">
        <AboutCard />
      </Section>
    </Screen>
  );
}
