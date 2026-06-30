import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const FlashSaleScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "flash-sale",

  category: ScenarioCategory.MARKETPLACE,

  title: "Flash Sale",

  description: "Triggered when flash sale.",

  event: MarketplaceEvents.FLASH_SALE,

  payload: {
    id: "evt-flash-sale",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
