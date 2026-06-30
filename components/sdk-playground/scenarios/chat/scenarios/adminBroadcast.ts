import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const AdminBroadcastScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "admin-broadcast",

  category: ScenarioCategory.CHAT,

  title: "Admin Broadcast",

  description: "Triggered when admin broadcast.",

  event: ChatEvents.ADMIN_BROADCAST,

  payload: {
    id: "evt-admin-broadcast",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
