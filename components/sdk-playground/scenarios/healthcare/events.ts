import { asNotificationEvent } from "react-native-notification-sdk";

export const HealthcareEvents = {
  APPOINTMENT_BOOKED: asNotificationEvent("APPOINTMENT_BOOKED"),

  APPOINTMENT_REMINDER: asNotificationEvent("APPOINTMENT_REMINDER"),

  APPOINTMENT_CANCELLED: asNotificationEvent("APPOINTMENT_CANCELLED"),

  DOCTOR_ASSIGNED: asNotificationEvent("DOCTOR_ASSIGNED"),

  PRESCRIPTION_READY: asNotificationEvent("PRESCRIPTION_READY"),

  MEDICINE_REMINDER: asNotificationEvent("MEDICINE_REMINDER"),

  LAB_TEST_SCHEDULED: asNotificationEvent("LAB_TEST_SCHEDULED"),

  REPORT_READY: asNotificationEvent("REPORT_READY"),

  EMERGENCY_ALERT: asNotificationEvent("EMERGENCY_ALERT"),

  VACCINATION_REMINDER: asNotificationEvent("VACCINATION_REMINDER"),
} as const;
