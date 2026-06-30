import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { SocialEvents } from "./events";

export const SocialRules: NotificationRule[] = [
  {
    event: SocialEvents.NEW_FOLLOWER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "👤 New Follower",

      body: "{{followerName}} started following you.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/profile",

      params: {
        profileId: "{{profileId}}",
      },
    },
  },

  {
    event: SocialEvents.FRIEND_REQUEST,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "🤝 Friend Request",

      body: "{{followerName}} sent you a friend request.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/friends",

      params: {
        userId: "{{userId}}",
      },
    },
  },

  {
    event: SocialEvents.FRIEND_ACCEPTED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "🎉 Friend Request Accepted",

      body: "{{followerName}} accepted your friend request.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/friends",

      params: {
        userId: "{{userId}}",
      },
    },
  },

  {
    event: SocialEvents.NEW_LIKE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "❤️ New Like",

      body: "{{followerName}} liked your post.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/feed",

      params: {
        postId: "{{postId}}",
      },
    },
  },

  {
    event: SocialEvents.NEW_COMMENT,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "💬 New Comment",

      body: "{{followerName}} commented on your post.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/feed",

      params: {
        postId: "{{postId}}",
        commentId: "{{commentId}}",
      },
    },
  },

  {
    event: SocialEvents.STORY_MENTION,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "📸 Story Mention",

      body: "{{followerName}} mentioned you in a story.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/stories",

      params: {
        storyId: "{{storyId}}",
      },
    },
  },

  {
    event: SocialEvents.LIVE_STARTED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🔴 Live Started",

      body: "{{userName}} is now live.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/live",

      params: {
        profileId: "{{profileId}}",
      },
    },
  },

  {
    event: SocialEvents.PROFILE_VERIFIED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "✔️ Profile Verified",

      body: "Congratulations! Your profile has been verified.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/profile",

      params: {
        profileId: "{{profileId}}",
      },
    },
  },

  {
    event: SocialEvents.ACHIEVEMENT_UNLOCKED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "🏆 Achievement Unlocked",

      body: "You've unlocked {{achievement}}!",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/profile",

      params: {
        profileId: "{{profileId}}",
      },
    },
  },

  {
    event: SocialEvents.WEEKLY_SUMMARY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "📈 Weekly Summary",

      body: "This week: {{followers}} followers, {{likes}} likes and {{comments}} comments.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/analytics",

      params: {
        profileId: "{{profileId}}",
      },
    },
  },
];
