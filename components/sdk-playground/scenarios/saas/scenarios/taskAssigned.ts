import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const TaskAssignedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "task-assigned",

  category: ScenarioCategory.SAAS,

  title: "Task Assigned",

  description: "Triggered when task assigned.",

  event: SaasEvents.TASK_ASSIGNED,

  payload: {
    id: "evt-task-assigned",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
