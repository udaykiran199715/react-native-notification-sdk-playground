import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const MentionReceivedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "mention-received",

  category: ScenarioCategory.SAAS,

  title: "Mention Received",

  description: "Triggered when mention received.",

  event: SaasEvents.MENTION_RECEIVED,

  payload: {
    id: "evt-mention-received",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
