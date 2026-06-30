import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const OrderCreatedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "order-created",

  category: ScenarioCategory.ECOMMERCE,

  title: "Order Created",

  description: "Customer successfully placed an order.",

  event: EcommerceEvents.ORDER_CREATED,

  payload: {
    id: "evt-order-created",

    data: {
      ...DemoOrderPayload,
      status: "CREATED",
    },
  },

  expected: CommonExpectedResults.customer,

  tags: ScenarioTags.ORDER,
});
