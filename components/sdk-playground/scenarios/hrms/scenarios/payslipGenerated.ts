import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { HrmsEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoEmployeePayload } from "../payloads";

export const PayslipGeneratedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "payslip-generated",

  category: ScenarioCategory.HRMS,

  title: "Payslip Generated",

  description: "Triggered when payslip generated.",

  event: HrmsEvents.PAYSLIP_GENERATED,

  payload: {
    id: "evt-payslip-generated",

    data: {
      ...DemoEmployeePayload,
    },
  },

  expected: CommonExpectedResults.employee,
});
