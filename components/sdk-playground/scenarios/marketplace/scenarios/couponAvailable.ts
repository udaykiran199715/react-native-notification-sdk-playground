import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const CouponAvailableScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "coupon-available",

  category: ScenarioCategory.MARKETPLACE,

  title: "Coupon Available",

  description: "Triggered when coupon available.",

  event: MarketplaceEvents.COUPON_AVAILABLE,

  payload: {
    id: "evt-coupon-available",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
