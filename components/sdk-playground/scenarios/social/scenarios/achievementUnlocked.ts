import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const AchievementUnlockedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "achievement-unlocked",

  category: ScenarioCategory.SOCIAL,

  title: "Achievement Unlocked",

  description: "Triggered when achievement unlocked.",

  event: SocialEvents.ACHIEVEMENT_UNLOCKED,

  payload: {
    id: "evt-achievement-unlocked",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
