import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const RestockAlertScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "restock-alert",

  category: ScenarioCategory.MARKETPLACE,

  title: "Restock Alert",

  description: "Triggered when restock alert.",

  event: MarketplaceEvents.RESTOCK_ALERT,

  payload: {
    id: "evt-restock-alert",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
