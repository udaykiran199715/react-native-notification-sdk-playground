import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const WishlistPriceDropScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "wishlist-price-drop",

  category: ScenarioCategory.MARKETPLACE,

  title: "Wishlist Price Drop",

  description: "Triggered when wishlist price drop.",

  event: MarketplaceEvents.WISHLIST_PRICE_DROP,

  payload: {
    id: "evt-wishlist-price-drop",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
