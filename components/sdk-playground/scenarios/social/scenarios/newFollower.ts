import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const NewFollowerScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-follower",

  category: ScenarioCategory.SOCIAL,

  title: "New Follower",

  description: "Triggered when new follower.",

  event: SocialEvents.NEW_FOLLOWER,

  payload: {
    id: "evt-new-follower",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
