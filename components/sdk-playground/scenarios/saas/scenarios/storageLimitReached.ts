import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const StorageLimitReachedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "storage-limit-reached",

  category: ScenarioCategory.SAAS,

  title: "Storage Limit Reached",

  description: "Triggered when storage limit reached.",

  event: SaasEvents.STORAGE_LIMIT_REACHED,

  payload: {
    id: "evt-storage-limit-reached",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
