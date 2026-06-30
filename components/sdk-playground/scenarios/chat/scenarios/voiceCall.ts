import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const VoiceCallScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "voice-call",

  category: ScenarioCategory.CHAT,

  title: "Voice Call",

  description: "Triggered when voice call.",

  event: ChatEvents.VOICE_CALL,

  payload: {
    id: "evt-voice-call",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
