import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const TaskCompletedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "task-completed",

  category: ScenarioCategory.SAAS,

  title: "Task Completed",

  description: "Triggered when task completed.",

  event: SaasEvents.TASK_COMPLETED,

  payload: {
    id: "evt-task-completed",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
