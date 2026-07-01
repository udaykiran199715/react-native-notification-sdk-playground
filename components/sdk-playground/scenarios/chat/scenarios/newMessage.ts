import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const NewMessageScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-message",

  category: ScenarioCategory.CHAT,

  title: "New Message",

  description: "Triggered when new message.",

  event: ChatEvents.NEW_MESSAGE,

  payload: {
    id: "evt-new-message",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
