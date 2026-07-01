import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const CartReminderScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "cart-reminder",

  category: ScenarioCategory.MARKETPLACE,

  title: "Cart Reminder",

  description: "Triggered when cart reminder.",

  event: MarketplaceEvents.CART_REMINDER,

  payload: {
    id: "evt-cart-reminder",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
