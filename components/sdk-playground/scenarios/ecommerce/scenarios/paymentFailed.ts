import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const PaymentFailedScenario: PlaygroundScenario = ScenarioFactory.create(
  {
    id: "payment-failed",

    category: ScenarioCategory.ECOMMERCE,

    title: "Payment Failed",

    description: "Customer payment failed while placing the order.",

    event: EcommerceEvents.PAYMENT_FAILED,

    payload: {
      id: "evt-payment-failed",

      data: {
        ...DemoOrderPayload,

        status: "PAYMENT_FAILED",

        paymentStatus: "FAILED",

        failureReason: "Insufficient Balance",

        retryAllowed: true,
      },
    },

    expected: CommonExpectedResults.customer,

    tags: ScenarioTags.PAYMENT,
  },
);
