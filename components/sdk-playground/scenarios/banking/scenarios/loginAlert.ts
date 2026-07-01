import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { BankingEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoBankPayload } from "../payloads";

export const LoginAlertScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "login-alert",

  category: ScenarioCategory.BANKING,

  title: "Login Alert",

  description: "Triggered when login alert.",

  event: BankingEvents.LOGIN_ALERT,

  payload: {
    id: "evt-login-alert",

    data: {
      ...DemoBankPayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
