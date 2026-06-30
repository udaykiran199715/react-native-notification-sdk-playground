import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ScenarioTags } from "../../common/tags";
import { EcommerceEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoOrderPayload } from "../payloads";

export const PaymentSuccessfulScenario: PlaygroundScenario =
  ScenarioFactory.create({
    id: "payment-successful",

    category: ScenarioCategory.ECOMMERCE,

    title: "Payment Successful",

    description: "Customer payment completed successfully.",

    event: EcommerceEvents.PAYMENT_SUCCESSFUL,

    payload: {
      id: "evt-payment-successful",

      data: {
        ...DemoOrderPayload,

        status: "PAID",

        paymentStatus: "SUCCESS",

        transactionId: "TXN-1001",
      },
    },

    expected: CommonExpectedResults.customer,

    tags: ScenarioTags.PAYMENT,
  });
