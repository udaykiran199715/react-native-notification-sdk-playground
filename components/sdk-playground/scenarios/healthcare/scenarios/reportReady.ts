import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HealthcareEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoHealthcarePayload } from "../payloads";

export const ReportReadyScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "report-ready",

  category: ScenarioCategory.HEALTHCARE,

  title: "Report Ready",

  description: "Triggered when report ready.",

  event: HealthcareEvents.REPORT_READY,

  payload: {
    id: "evt-report-ready",

    data: {
      ...DemoHealthcarePayload,
    },
  },

  expected: CommonExpectedResults.patient,
});
