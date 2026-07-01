import React from "react";

import { NotificationModuleScreen } from "@/components/sdk-playground/features/notification-target";

export default function BankingScreen() {
  return (
    <NotificationModuleScreen
      title="Banking"
      icon="business"
      route="/banking"
    />
  );
}
