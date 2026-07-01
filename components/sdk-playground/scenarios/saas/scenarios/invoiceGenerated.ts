import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const InvoiceGeneratedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "invoice-generated",

  category: ScenarioCategory.SAAS,

  title: "Invoice Generated",

  description: "Triggered when invoice generated.",

  event: SaasEvents.INVOICE_GENERATED,

  payload: {
    id: "evt-invoice-generated",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
