import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const TransactionFailedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "transaction-failed",

  category: ScenarioCategory.BANKING,

  title: "Transaction Failed",

  description: "Triggered when transaction failed.",

  event: BankingEvents.TRANSACTION_FAILED,

  payload: {
    id: "evt-transaction-failed",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
