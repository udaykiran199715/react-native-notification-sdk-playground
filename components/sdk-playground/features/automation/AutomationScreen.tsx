import React from "react";
import Notifications from "react-native-notification-sdk";

import { MasterDetailLayout, Screen, Section } from "../../common";

import { AudienceResolverCard } from "./components/AudienceResolverCard";
import { AutomationToolbar } from "./components/AutomationToolbar";
import { PayloadPreviewCard } from "./components/PayloadPreviewCard";
import { RuleResolverCard } from "./components/RuleResolverCard";
import { ScenarioSelector } from "./components/ScenarioSelector";
import { useAutomation } from "./hooks/useAutomation";

export function AutomationScreen(): React.JSX.Element {
  const automation = useAutomation();

  return (
    <Screen>
      <AutomationToolbar
        onRun={() => {
          if (!automation.scenario) {
            return;
          }

          void Notifications.emit(
            automation.scenario.event,
            automation.scenario.payload,
          );
        }}
      />

      <MasterDetailLayout
        master={
          <ScenarioSelector
            scenarios={automation.scenarios}
            selectedId={automation.selectedId}
            onSelect={automation.setSelectedId}
          />
        }
        detail={
          <>
            <Section title="Rule">
              <RuleResolverCard matched={!!automation.scenario} />
            </Section>

            <Section title="Audience">
              <AudienceResolverCard audience={[]} />
            </Section>

            <Section title="Compiled Payload">
              <PayloadPreviewCard payload={automation.scenario?.payload} />
            </Section>
          </>
        }
      />
    </Screen>
  );
}
