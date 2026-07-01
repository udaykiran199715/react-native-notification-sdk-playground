import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SocialEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSocialPayload } from "../payloads";

export const StoryMentionScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "story-mention",

  category: ScenarioCategory.SOCIAL,

  title: "Story Mention",

  description: "Triggered when story mention.",

  event: SocialEvents.STORY_MENTION,

  payload: {
    id: "evt-story-mention",

    data: {
      ...DemoSocialPayload,
    },
  },

  expected: CommonExpectedResults.social,
});
