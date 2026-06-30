import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const MissedCallScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "missed-call",

  category: ScenarioCategory.CHAT,

  title: "Missed Call",

  description: "Triggered when missed call.",

  event: ChatEvents.MISSED_CALL,

  payload: {
    id: "evt-missed-call",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
