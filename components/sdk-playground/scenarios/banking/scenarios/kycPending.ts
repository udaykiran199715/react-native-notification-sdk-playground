import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const KycPendingScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "kyc-pending",

  category: ScenarioCategory.BANKING,

  title: "Kyc Pending",

  description: "Triggered when kyc pending.",

  event: BankingEvents.KYC_PENDING,

  payload: {
    id: "evt-kyc-pending",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
