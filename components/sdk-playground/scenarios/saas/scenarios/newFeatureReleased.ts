import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const NewFeatureReleasedScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "new-feature-released",

  category: ScenarioCategory.SAAS,

  title: "New Feature Released",

  description: "Triggered when new feature released.",

  event: SaasEvents.NEW_FEATURE_RELEASED,

  payload: {
    id: "evt-new-feature-released",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
