import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const SellerReplyScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "seller-reply",

  category: ScenarioCategory.MARKETPLACE,

  title: "Seller Reply",

  description: "Triggered when seller reply.",

  event: MarketplaceEvents.SELLER_REPLY,

  payload: {
    id: "evt-seller-reply",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
