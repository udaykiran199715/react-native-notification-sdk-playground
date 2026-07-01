import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const ProfileVerifiedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "profile-verified",

  category: ScenarioCategory.SOCIAL,

  title: "Profile Verified",

  description: "Triggered when profile verified.",

  event: SocialEvents.PROFILE_VERIFIED,

  payload: {
    id: "evt-profile-verified",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
