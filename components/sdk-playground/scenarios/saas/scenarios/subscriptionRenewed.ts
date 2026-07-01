import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const SubscriptionRenewedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "subscription-renewed",

  category: ScenarioCategory.SAAS,

  title: "Subscription Renewed",

  description: "Triggered when subscription renewed.",

  event: SaasEvents.SUBSCRIPTION_RENEWED,

  payload: {
    id: "evt-subscription-renewed",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
