import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const LiveStartedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "live-started",

  category: ScenarioCategory.SOCIAL,

  title: "Live Started",

  description: "Triggered when live started.",

  event: SocialEvents.LIVE_STARTED,

  payload: {
    id: "evt-live-started",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
