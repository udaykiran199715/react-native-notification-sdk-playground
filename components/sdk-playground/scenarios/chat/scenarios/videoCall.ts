import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const VideoCallScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "video-call",

  category: ScenarioCategory.CHAT,

  title: "Video Call",

  description: "Triggered when video call.",

  event: ChatEvents.VIDEO_CALL,

  payload: {
    id: "evt-video-call",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
