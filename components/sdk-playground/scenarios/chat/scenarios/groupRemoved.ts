import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const GroupRemovedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "group-removed",

  category: ScenarioCategory.CHAT,

  title: "Group Removed",

  description: "Triggered when group removed.",

  event: ChatEvents.GROUP_REMOVED,

  payload: {
    id: "evt-group-removed",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
