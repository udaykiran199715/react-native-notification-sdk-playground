import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const BeneficiaryAddedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "beneficiary-added",

  category: ScenarioCategory.BANKING,

  title: "Beneficiary Added",

  description: "Triggered when beneficiary added.",

  event: BankingEvents.BENEFICIARY_ADDED,

  payload: {
    id: "evt-beneficiary-added",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
