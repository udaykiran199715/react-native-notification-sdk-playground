import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const SalaryCreditedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "salary-credited",

  category: ScenarioCategory.BANKING,

  title: "Salary Credited",

  description: "Triggered when salary credited.",

  event: BankingEvents.SALARY_CREDITED,

  payload: {
    id: "evt-salary-credited",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
