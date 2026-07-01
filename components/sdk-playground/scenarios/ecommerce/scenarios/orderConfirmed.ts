import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderConfirmedScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "order-confirmed",

    category: ScenarioCategory.ECOMMERCE,

    title: "Order Confirmed",

    description:
      "Customer payment has been verified and the order is confirmed.",

    event: EcommerceEvents.ORDER_CONFIRMED,

    payload: {
      id: "evt-order-confirmed",

      data: {
        ...DemoOrderPayload,
        status: "CONFIRMED",
      },
    },

    expected: CommonExpectedResults.customer,

    tags: ScenarioTags.ORDER,
  });
