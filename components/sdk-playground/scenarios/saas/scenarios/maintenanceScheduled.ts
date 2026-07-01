import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const MaintenanceScheduledScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "maintenance-scheduled",

  category: ScenarioCategory.SAAS,

  title: "Maintenance Scheduled",

  description: "Triggered when maintenance scheduled.",

  event: SaasEvents.MAINTENANCE_SCHEDULED,

  payload: {
    id: "evt-maintenance-scheduled",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
