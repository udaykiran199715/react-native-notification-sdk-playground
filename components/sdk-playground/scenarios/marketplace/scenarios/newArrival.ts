import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { MarketplaceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoMarketplacePayload } from "../payloads";

export const NewArrivalScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-arrival",

  category: ScenarioCategory.MARKETPLACE,

  title: "New Arrival",

  description: "Triggered when new arrival.",

  event: MarketplaceEvents.NEW_ARRIVAL,

  payload: {
    id: "evt-new-arrival",

    data: {
      ...DemoMarketplacePayload,
    },
  },

  expected: CommonExpectedResults.customer,
});
