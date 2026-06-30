import { JsonEditor } from "@/components/sdk-playground/components/json";
import React from "react";

import type { NotificationPayload } from "react-native-notification-sdk";

type Props = {
  payload?: NotificationPayload;
};

export function PayloadPreviewCard({
  payload,
}: Props): React.JSX.Element | null {
  if (!payload) {
    return null;
  }

  return <JsonEditor value={payload} />;
}
