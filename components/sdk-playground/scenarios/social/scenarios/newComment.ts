import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const NewCommentScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-comment",

  category: ScenarioCategory.SOCIAL,

  title: "New Comment",

  description: "Triggered when new comment.",

  event: SocialEvents.NEW_COMMENT,

  payload: {
    id: "evt-new-comment",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
