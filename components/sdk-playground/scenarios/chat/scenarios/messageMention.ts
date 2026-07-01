import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const MessageMentionScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "message-mention",

  category: ScenarioCategory.CHAT,

  title: "Message Mention",

  description: "Triggered when message mention.",

  event: ChatEvents.MESSAGE_MENTION,

  payload: {
    id: "evt-message-mention",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
