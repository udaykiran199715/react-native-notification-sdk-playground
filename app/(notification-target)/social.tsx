import React from "react";

import { NotificationModuleScreen } from "@/components/sdk-playground/features/notification-target";

export default function SocialScreen() {
  return (
    <NotificationModuleScreen
      title="Social"
      icon="people-circle"
      route="/social"
    />
  );
}
