import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const CommentAddedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "comment-added",

  category: ScenarioCategory.SAAS,

  title: "Comment Added",

  description: "Triggered when comment added.",

  event: SaasEvents.COMMENT_ADDED,

  payload: {
    id: "evt-comment-added",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
