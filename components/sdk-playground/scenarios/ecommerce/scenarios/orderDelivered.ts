import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderDeliveredScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "order-delivered",

    category: ScenarioCategory.ECOMMERCE,

    title: "Order Delivered",

    description: "The order has been successfully delivered to the customer.",

    event: EcommerceEvents.ORDER_DELIVERED,

    payload: {
      id: "evt-order-delivered",

      data: {
        ...DemoOrderPayload,

        status: "DELIVERED",

        deliveredAt: "2026-06-29T16:45:00Z",

        deliveredBy: "Ravi Kumar",

        proofOfDelivery: true,

        ratingPending: true,
      },
    },

    expected: CommonExpectedResults.customer,

    tags: ScenarioTags.DELIVERY,
  });
