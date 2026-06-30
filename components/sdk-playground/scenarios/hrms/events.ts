import { asNotificationEvent } from "react-native-notification-sdk";

export const HrmsEvents = {
  LEAVE_REQUESTED: asNotificationEvent("LEAVE_REQUESTED"),

  LEAVE_APPROVED: asNotificationEvent("LEAVE_APPROVED"),

  LEAVE_REJECTED: asNotificationEvent("LEAVE_REJECTED"),

  ATTENDANCE_REMINDER: asNotificationEvent("ATTENDANCE_REMINDER"),

  SHIFT_ASSIGNED: asNotificationEvent("SHIFT_ASSIGNED"),

  OVERTIME_APPROVED: asNotificationEvent("OVERTIME_APPROVED"),

  PAYSLIP_GENERATED: asNotificationEvent("PAYSLIP_GENERATED"),

  HOLIDAY_ANNOUNCEMENT: asNotificationEvent("HOLIDAY_ANNOUNCEMENT"),

  BIRTHDAY_WISH: asNotificationEvent("BIRTHDAY_WISH"),

  WORK_ANNIVERSARY: asNotificationEvent("WORK_ANNIVERSARY"),
} as const;
