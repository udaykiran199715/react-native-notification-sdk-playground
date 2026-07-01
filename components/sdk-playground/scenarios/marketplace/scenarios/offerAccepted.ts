import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const OfferAcceptedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "offer-accepted",

  category: ScenarioCategory.MARKETPLACE,

  title: "Offer Accepted",

  description: "Triggered when offer accepted.",

  event: MarketplaceEvents.OFFER_ACCEPTED,

  payload: {
    id: "evt-offer-accepted",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
