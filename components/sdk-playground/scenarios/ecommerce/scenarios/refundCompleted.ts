import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const RefundCompletedScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "refund-completed",

    category: ScenarioCategory.ECOMMERCE,

    title: "Refund Completed",

    description: "The refund has been successfully credited to the customer.",

    event: EcommerceEvents.REFUND_COMPLETED,

    payload: {
      id: "evt-refund-completed",

      data: {
        ...DemoOrderPayload,

        status: "REFUND_COMPLETED",

        refundAmount: 500,

        refundStatus: "COMPLETED",

        refundReference: "RFN-10001",

        refundedAt: "2026-07-03T11:30:00Z",
      },
    },

    expected: CommonExpectedResults.refund,

    tags: ScenarioTags.REFUND,
  });
