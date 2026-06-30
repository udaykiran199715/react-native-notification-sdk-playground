import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const LowBalanceScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "low-balance",

  category: ScenarioCategory.BANKING,

  title: "Low Balance",

  description: "Triggered when low balance.",

  event: BankingEvents.LOW_BALANCE,

  payload: {
    id: "evt-low-balance",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
