import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { SaasEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoSaasPayload } from "../payloads";

export const WorkspaceInviteScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "workspace-invite",

  category: ScenarioCategory.SAAS,

  title: "Workspace Invite",

  description: "Triggered when workspace invite.",

  event: SaasEvents.WORKSPACE_INVITE,

  payload: {
    id: "evt-workspace-invite",

    data: {
      ...DemoSaasPayload,
    },
  },

  expected: CommonExpectedResults.workspace,
});
