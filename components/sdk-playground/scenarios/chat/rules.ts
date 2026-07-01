import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { ChatEvents } from "./events";

export const ChatRules: NotificationRule[] = [
  {
    event: ChatEvents.NEW_MESSAGE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "💬 {{senderName}}",

      body: "{{message}}",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
      },
    },
  },

  {
    event: ChatEvents.MESSAGE_REACTION,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "👍 Message Reaction",

      body: "{{senderName}} reacted to your message.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
        messageId: "{{messageId}}",
      },
    },
  },

  {
    event: ChatEvents.MESSAGE_MENTION,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "📢 You were mentioned",

      body: "{{senderName}} mentioned you in {{groupName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
        messageId: "{{messageId}}",
      },
    },
  },

  {
    event: ChatEvents.GROUP_INVITE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "👥 Group Invitation",

      body: "You've been invited to {{groupName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        groupId: "{{groupId}}",
      },
    },
  },

  {
    event: ChatEvents.GROUP_REMOVED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "🚪 Removed From Group",

      body: "You have been removed from {{groupName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        groupId: "{{groupId}}",
      },
    },
  },

  {
    event: ChatEvents.VOICE_CALL,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "📞 Incoming Voice Call",

      body: "{{senderName}} is calling you.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
      },
    },
  },

  {
    event: ChatEvents.VIDEO_CALL,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "🎥 Incoming Video Call",

      body: "{{senderName}} started a video call.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
      },
    },
  },

  {
    event: ChatEvents.MISSED_CALL,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["receiverId"],
    },

    notification: {
      title: "📵 Missed Call",

      body: "You missed a call from {{senderName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",

      params: {
        chatId: "{{chatId}}",
      },
    },
  },

  {
    event: ChatEvents.CHANNEL_ANNOUNCEMENT,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "📢 Channel Announcement",

      body: "{{message}}",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",
    },
  },

  {
    event: ChatEvents.ADMIN_BROADCAST,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "📣 Admin Broadcast",

      body: "{{message}}",

      image: "{{image}}",
    },

    navigation: {
      route: "/chat",
    },
  },
];
