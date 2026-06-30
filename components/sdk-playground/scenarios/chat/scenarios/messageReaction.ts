import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const MessageReactionScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "message-reaction",

  category: ScenarioCategory.CHAT,

  title: "Message Reaction",

  description: "Triggered when message reaction.",

  event: ChatEvents.MESSAGE_REACTION,

  payload: {
    id: "evt-message-reaction",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
