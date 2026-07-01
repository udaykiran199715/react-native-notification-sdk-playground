import { asNotificationEvent } from "react-native-notification-sdk";

export const BankingEvents = {
  TRANSACTION_SUCCESS: asNotificationEvent("TRANSACTION_SUCCESS"),

  TRANSACTION_FAILED: asNotificationEvent("TRANSACTION_FAILED"),

  LOW_BALANCE: asNotificationEvent("LOW_BALANCE"),

  SALARY_CREDITED: asNotificationEvent("SALARY_CREDITED"),

  CREDIT_CARD_DUE: asNotificationEvent("CREDIT_CARD_DUE"),

  EMI_REMINDER: asNotificationEvent("EMI_REMINDER"),

  ACCOUNT_BLOCKED: asNotificationEvent("ACCOUNT_BLOCKED"),

  LOGIN_ALERT: asNotificationEvent("LOGIN_ALERT"),

  BENEFICIARY_ADDED: asNotificationEvent("BENEFICIARY_ADDED"),

  KYC_PENDING: asNotificationEvent("KYC_PENDING"),
} as const;
