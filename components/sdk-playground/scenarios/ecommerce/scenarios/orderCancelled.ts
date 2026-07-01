import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderCancelledScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "order-cancelled",

    category: ScenarioCategory.ECOMMERCE,

    title: "Order Cancelled",

    description: "The customer's order has been cancelled.",

    event: EcommerceEvents.ORDER_CANCELLED,

    payload: {
      id: "evt-order-cancelled",

      data: {
        ...DemoOrderPayload,

        status: "CANCELLED",

        cancelledBy: "Customer",

        cancellationReason: "Changed my mind",

        refundEligible: true,
      },
    },

    expected: CommonExpectedResults.customer,

    tags: ScenarioTags.ORDER,
  });
