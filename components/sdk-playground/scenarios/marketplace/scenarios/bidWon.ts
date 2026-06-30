import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const BidWonScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "bid-won",

  category: ScenarioCategory.MARKETPLACE,

  title: "Bid Won",

  description: "Triggered when bid won.",

  event: MarketplaceEvents.BID_WON,

  payload: {
    id: "evt-bid-won",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
