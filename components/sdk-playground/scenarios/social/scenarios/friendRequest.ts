import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const FriendRequestScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "friend-request",

  category: ScenarioCategory.SOCIAL,

  title: "Friend Request",

  description: "Triggered when friend request.",

  event: SocialEvents.FRIEND_REQUEST,

  payload: {
    id: "evt-friend-request",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
