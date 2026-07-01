import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const WeeklySummaryScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "weekly-summary",

  category: ScenarioCategory.SOCIAL,

  title: "Weekly Summary",

  description: "Triggered when weekly summary.",

  event: SocialEvents.WEEKLY_SUMMARY,

  payload: {
    id: "evt-weekly-summary",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
