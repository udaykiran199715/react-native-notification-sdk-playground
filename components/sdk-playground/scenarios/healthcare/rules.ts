import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { HealthcareEvents } from "./events";

export const HealthcareRules: NotificationRule[] = [
  {
    event: HealthcareEvents.APPOINTMENT_BOOKED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "🏥 Appointment Confirmed",

      body: "Your appointment with {{doctorName}} has been booked.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        appointmentId: "{{appointmentId}}",
      },
    },
  },

  {
    event: HealthcareEvents.APPOINTMENT_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "⏰ Appointment Reminder",

      body: "Reminder: Your appointment with {{doctorName}} is today.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        appointmentId: "{{appointmentId}}",
      },
    },
  },

  {
    event: HealthcareEvents.APPOINTMENT_CANCELLED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "❌ Appointment Cancelled",

      body: "Your appointment with {{doctorName}} has been cancelled.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        appointmentId: "{{appointmentId}}",
      },
    },
  },

  {
    event: HealthcareEvents.DOCTOR_ASSIGNED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "👨‍⚕️ Doctor Assigned",

      body: "{{doctorName}} has been assigned to your case.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        doctorId: "{{doctorId}}",
      },
    },
  },

  {
    event: HealthcareEvents.PRESCRIPTION_READY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "💊 Prescription Ready",

      body: "Your prescription is now available.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        appointmentId: "{{appointmentId}}",
      },
    },
  },

  {
    event: HealthcareEvents.MEDICINE_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "💊 Medicine Reminder",

      body: "Time to take {{medicine}} ({{dosage}}).",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        patientId: "{{patientId}}",
      },
    },
  },

  {
    event: HealthcareEvents.LAB_TEST_SCHEDULED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "🧪 Lab Test Scheduled",

      body: "Your lab test has been scheduled successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        patientId: "{{patientId}}",
      },
    },
  },

  {
    event: HealthcareEvents.REPORT_READY,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "📄 Medical Report Ready",

      body: "Your medical report is now available.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        reportId: "{{reportId}}",
      },
    },
  },

  {
    event: HealthcareEvents.EMERGENCY_ALERT,

    enabled: true,

    audience: {
      type: AudienceType.ALL,
    },

    notification: {
      title: "🚨 Emergency Alert",

      body: "Emergency reported for {{patientName}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",
    },
  },

  {
    event: HealthcareEvents.VACCINATION_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["patientId"],
    },

    notification: {
      title: "💉 Vaccination Reminder",

      body: "{{vaccine}} vaccination is due.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/health",

      params: {
        patientId: "{{patientId}}",
      },
    },
  },
];
