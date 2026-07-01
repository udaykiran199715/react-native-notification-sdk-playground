import React from "react";

import { NotificationModuleScreen } from "@/components/sdk-playground/features/notification-target";

export default function HealthcareScreen() {
  return (
    <NotificationModuleScreen
      title="Healthcare"
      icon="medical"
      route="/healthcare"
    />
  );
}
