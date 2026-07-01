import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const NewLikeScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-like",

  category: ScenarioCategory.SOCIAL,

  title: "New Like",

  description: "Triggered when new like.",

  event: SocialEvents.NEW_LIKE,

  payload: {
    id: "evt-new-like",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
