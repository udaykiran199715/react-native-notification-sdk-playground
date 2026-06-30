import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const GroupInviteScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "group-invite",

  category: ScenarioCategory.CHAT,

  title: "Group Invite",

  description: "Triggered when group invite.",

  event: ChatEvents.GROUP_INVITE,

  payload: {
    id: "evt-group-invite",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
