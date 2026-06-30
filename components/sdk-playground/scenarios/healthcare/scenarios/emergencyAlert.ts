import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const EmergencyAlertScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "emergency-alert",

  category: ScenarioCategory.HEALTHCARE,

  title: "Emergency Alert",

  description: "Triggered when emergency alert.",

  event: HealthcareEvents.EMERGENCY_ALERT,

  payload: {
    id: "evt-emergency-alert",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
