import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderShippedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "order-shipped",

  category: ScenarioCategory.ECOMMERCE,

  title: "Order Shipped",

  description: "The order has been shipped through the courier partner.",

  event: EcommerceEvents.ORDER_SHIPPED,

  payload: {
    id: "evt-order-shipped",

    data: {
      ...DemoOrderPayload,

      status: "SHIPPED",

      courier: "Blue Dart",

      trackingId: "TRK-1001",

      estimatedDelivery: "2026-07-02",

      shippedAt: "2026-06-29T14:30:00Z",
    },
  },

  expected: CommonExpectedResults.customer,

  tags: ScenarioTags.DELIVERY,
});
