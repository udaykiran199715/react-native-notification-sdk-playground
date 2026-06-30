import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const TransactionSuccessScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "transaction-success",

  category: ScenarioCategory.BANKING,

  title: "Transaction Success",

  description: "Triggered when transaction success.",

  event: BankingEvents.TRANSACTION_SUCCESS,

  payload: {
    id: "evt-transaction-success",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
