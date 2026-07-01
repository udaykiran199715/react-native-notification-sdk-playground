import { NotificationRule } from "react-native-notification-sdk";
import { BankingRules } from "../scenarios/banking/rules";
import { ChatRules } from "../scenarios/chat/rules";
import { EcommerceRules } from "../scenarios/ecommerce";
import { HealthcareRules } from "../scenarios/healthcare/rules";
import { HrmsRules } from "../scenarios/hrms/rules";
import { LogisticsRules } from "../scenarios/logistics/rules";
import { MarketplaceRules } from "../scenarios/marketplace/rules";
import { SaasRules } from "../scenarios/saas/rules";
import { SocialRules } from "../scenarios/social/rules";

export const Rules: NotificationRule[] = [
  ...EcommerceRules,
  ...HrmsRules,
  ...BankingRules,
  ...ChatRules,
  ...LogisticsRules,
  ...HealthcareRules,
  ...MarketplaceRules,
  ...SaasRules,
  ...SocialRules,
];
