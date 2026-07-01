import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const AccountBlockedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "account-blocked",

  category: ScenarioCategory.BANKING,

  title: "Account Blocked",

  description: "Triggered when account blocked.",

  event: BankingEvents.ACCOUNT_BLOCKED,

  payload: {
    id: "evt-account-blocked",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
