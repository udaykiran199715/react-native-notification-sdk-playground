import { AudienceType, NotificationRule } from "react-native-notification-sdk";

import { BankingEvents } from "./events";

export const BankingRules: NotificationRule[] = [
  {
    event: BankingEvents.TRANSACTION_SUCCESS,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "💳 Transaction Successful",

      body: "₹{{amount}} has been debited successfully.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/transactions/details",

      params: {
        transactionId: "{{transactionId}}",
      },
    },
  },

  {
    event: BankingEvents.TRANSACTION_FAILED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "❌ Transaction Failed",

      body: "Transaction {{transactionId}} could not be completed.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/transactions/details",

      params: {
        transactionId: "{{transactionId}}",
      },
    },
  },

  {
    event: BankingEvents.LOW_BALANCE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "⚠️ Low Balance Alert",

      body: "Your account balance is ₹{{balance}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/accounts",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.SALARY_CREDITED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "💰 Salary Credited",

      body: "₹{{amount}} has been credited to your account.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/accounts",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.CREDIT_CARD_DUE,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "💳 Credit Card Payment Due",

      body: "Your credit card payment is due on {{dueDate}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/cards",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.EMI_REMINDER,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "📅 EMI Reminder",

      body: "Your EMI payment is due on {{dueDate}}.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/loans",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.ACCOUNT_BLOCKED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🔒 Account Blocked",

      body: "Your account has been temporarily blocked for security reasons.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/security",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.LOGIN_ALERT,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "🛡️ New Login Detected",

      body: "A new login to your account has been detected.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/security",

      params: {
        accountNumber: "{{accountNumber}}",
      },
    },
  },

  {
    event: BankingEvents.BENEFICIARY_ADDED,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "👤 Beneficiary Added",

      body: "{{beneficiary}} has been added as a beneficiary.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/beneficiaries",

      params: {
        beneficiary: "{{beneficiary}}",
      },
    },
  },

  {
    event: BankingEvents.KYC_PENDING,

    enabled: true,

    audience: {
      type: AudienceType.USERS,
      sources: ["customerId"],
    },

    notification: {
      title: "📄 KYC Pending",

      body: "Complete your KYC to continue using banking services.",

      image: "{{image}}",
    },

    navigation: {
      route: "/(tabs)/banking/kyc",

      params: {
        customerId: "{{customerId}}",
      },
    },
  },
];
