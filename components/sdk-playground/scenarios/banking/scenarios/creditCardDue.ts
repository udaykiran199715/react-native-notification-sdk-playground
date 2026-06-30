import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const CreditCardDueScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "credit-card-due",

  category: ScenarioCategory.BANKING,

  title: "Credit Card Due",

  description: "Triggered when credit card due.",

  event: BankingEvents.CREDIT_CARD_DUE,

  payload: {
    id: "evt-credit-card-due",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
