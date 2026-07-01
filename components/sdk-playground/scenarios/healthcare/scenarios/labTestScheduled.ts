import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const LabTestScheduledScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "lab-test-scheduled",

  category: ScenarioCategory.HEALTHCARE,

  title: "Lab Test Scheduled",

  description: "Triggered when lab test scheduled.",

  event: HealthcareEvents.LAB_TEST_SCHEDULED,

  payload: {
    id: "evt-lab-test-scheduled",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
