import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const OfferRejectedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "offer-rejected",

  category: ScenarioCategory.MARKETPLACE,

  title: "Offer Rejected",

  description: "Triggered when offer rejected.",

  event: MarketplaceEvents.OFFER_REJECTED,

  payload: {
    id: "evt-offer-rejected",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
