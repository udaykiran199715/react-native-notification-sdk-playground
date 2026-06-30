import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const FriendAcceptedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "friend-accepted",

  category: ScenarioCategory.SOCIAL,

  title: "Friend Accepted",

  description: "Triggered when friend accepted.",

  event: SocialEvents.FRIEND_ACCEPTED,

  payload: {
    id: "evt-friend-accepted",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
