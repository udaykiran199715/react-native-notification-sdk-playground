import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const RefundInitiatedScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "refund-initiated",

    category: ScenarioCategory.ECOMMERCE,

    title: "Refund Initiated",

    description:
      "The refund process has been initiated for the cancelled order.",

    event: EcommerceEvents.REFUND_INITIATED,

    payload: {
      id: "evt-refund-initiated",

      data: {
        ...DemoOrderPayload,

        status: "REFUND_INITIATED",

        refundAmount: 500,

        refundStatus: "INITIATED",

        refundReference: "RFN-10001",

        estimatedRefundDate: "2026-07-03",
      },
    },

    expected: CommonExpectedResults.refund,

    tags: ScenarioTags.REFUND,
  });
