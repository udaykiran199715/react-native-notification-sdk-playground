import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderPackedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "order-packed",

  category: ScenarioCategory.ECOMMERCE,

  title: "Order Packed",

  description: "The warehouse has packed the customer's order.",

  event: EcommerceEvents.ORDER_PACKED,

  payload: {
    id: "evt-order-packed",

    data: {
      ...DemoOrderPayload,

      status: "PACKED",

      warehouse: "Hyderabad Warehouse",

      packedBy: "Warehouse Operator",

      packedAt: "2026-06-29T11:30:00Z",
    },
  },

  expected: CommonExpectedResults.customer,

  tags: ScenarioTags.ORDER,
});
