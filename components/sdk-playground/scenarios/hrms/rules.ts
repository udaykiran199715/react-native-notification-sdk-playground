import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { HrmsEvents } from "./events";

export const HrmsRules: NotificationRule[] = [
  {
    event: HrmsEvents.LEAVE_REQUESTED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["managerId"],
    },

    notification: {
      title: "📝 Leave Request",

      body: "{{employeeName}} requested {{leaveType}} for {{totalDays}} day(s).",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/manager/leave-request",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.LEAVE_APPROVED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "✅ Leave Approved",

      body: "Your leave from {{fromDate}} to {{toDate}} has been approved.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/leave/history",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.LEAVE_REJECTED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "❌ Leave Rejected",

      body: "Your {{leaveType}} request has been rejected by {{managerName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/leave/history",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.ATTENDANCE_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "⏰ Attendance Reminder",

      body: "Don't forget to check in for today's shift.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/attendance",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.SHIFT_ASSIGNED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "📅 Shift Assigned",

      body: "Your {{shift}} shift has been assigned.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/shift",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.OVERTIME_APPROVED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "💼 Overtime Approved",

      body: "Your overtime request has been approved.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/attendance",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.PAYSLIP_GENERATED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "💰 Payslip Ready",

      body: "Your monthly payslip is now available.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/payroll",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.HOLIDAY_ANNOUNCEMENT,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🎉 Holiday Announcement",

      body: "A new company holiday has been announced.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/announcements",
    },
  },

  {
    event: HrmsEvents.BIRTHDAY_WISH,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "🎂 Happy Birthday",

      body: "Happy Birthday {{employeeName}}! Have a wonderful year ahead.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/profile",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },

  {
    event: HrmsEvents.WORK_ANNIVERSARY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["employeeId"],
    },

    notification: {
      title: "🏆 Work Anniversary",

      body: "Congratulations {{employeeName}} on your work anniversary!",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/profile",

      params: {
        employeeId: "{{employeeId}}",
      },
    },
  },
];
