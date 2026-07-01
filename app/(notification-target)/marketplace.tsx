import React from "react";

import { NotificationModuleScreen } from "@/components/sdk-playground/features/notification-target";

export default function MarketplaceScreen() {
  return (
    <NotificationModuleScreen
      title="Marketplace"
      icon="storefront"
      route="/marketplace"
    />
  );
}
