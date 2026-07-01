import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { SaasEvents } from "./events";

export const SaasRules: NotificationRule[] = [
  {
    event: SaasEvents.WORKSPACE_INVITE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "👋 Workspace Invitation",

      body: "You've been invited to join {{workspaceName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        workspaceId: "{{workspaceId}}",
      },
    },
  },

  {
    event: SaasEvents.TASK_ASSIGNED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "📋 New Task Assigned",

      body: "{{taskTitle}} has been assigned to you.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        projectId: "{{projectId}}",
        taskId: "{{taskId}}",
      },
    },
  },

  {
    event: SaasEvents.TASK_COMPLETED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "✅ Task Completed",

      body: "{{taskTitle}} has been marked as completed.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        projectId: "{{projectId}}",
        taskId: "{{taskId}}",
      },
    },
  },

  {
    event: SaasEvents.COMMENT_ADDED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "💬 New Comment",

      body: "{{userName}} commented on {{taskTitle}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        projectId: "{{projectId}}",
        taskId: "{{taskId}}",
      },
    },
  },

  {
    event: SaasEvents.MENTION_RECEIVED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "📢 You Were Mentioned",

      body: "{{userName}} mentioned you in {{taskTitle}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        projectId: "{{projectId}}",
        taskId: "{{taskId}}",
      },
    },
  },

  {
    event: SaasEvents.SUBSCRIPTION_RENEWED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "💳 Subscription Renewed",

      body: "Your {{plan}} subscription has been renewed successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",
    },
  },

  {
    event: SaasEvents.INVOICE_GENERATED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "🧾 Invoice Generated",

      body: "Invoice {{invoiceId}} for ₹{{amount}} is ready.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",

      params: {
        invoiceId: "{{invoiceId}}",
      },
    },
  },

  {
    event: SaasEvents.STORAGE_LIMIT_REACHED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["userId"],
    },

    notification: {
      title: "💾 Storage Limit Warning",

      body: "You've used {{storageUsed}} of your storage quota.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",
    },
  },

  {
    event: SaasEvents.MAINTENANCE_SCHEDULED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🛠️ Scheduled Maintenance",

      body: "Scheduled maintenance has been planned. Please save your work.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",
    },
  },

  {
    event: SaasEvents.NEW_FEATURE_RELEASED,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "✨ New Feature Released",

      body: "{{featureName}} is now available in your workspace.",

      image: "{{image}}",
    },

    navigation: {
      route: "/sass",
    },
  },
];
