import { ScenarioFactory } from "../../factories";
import { PlaygroundScenario } from "../../types/PlaygroundScenario";
import { ScenarioCategory } from "../../types/ScenarioCategory";

import { ChatEvents } from "../events";
import { CommonExpectedResults } from "../expected";
import { DemoChatPayload } from "../payloads";

export const ChannelAnnouncementScenario: PlaygroundScenario = ScenarioFactory.create({
  id: "channel-announcement",

  category: ScenarioCategory.CHAT,

  title: "Channel Announcement",

  description: "Triggered when channel announcement.",

  event: ChatEvents.CHANNEL_ANNOUNCEMENT,

  payload: {
    id: "evt-channel-announcement",

    data: {
      ...DemoChatPayload,
    },
  },

  expected: CommonExpectedResults.chat,
});
