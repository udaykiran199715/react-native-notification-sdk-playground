import React from "react";

import { NotificationModuleScreen } from "@/components/sdk-playground/features/notification-target";

export default function EcommerceScreen() {
  return (
    <NotificationModuleScreen
      title="E-Commerce"
      icon="cart"
      route="/ecommerce"
    />
  );
}
