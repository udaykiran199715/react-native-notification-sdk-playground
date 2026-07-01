import { JsonEditor } from "@/components/sdk-playground/components/json";
import React from "react";
import { NotificationPayload } from "react-native-notification-sdk";

interface PayloadTabProps {
  payload: NotificationPayload;
  onChange(payload: NotificationPayload): void;
}

export function ScenarioPayload({
  payload,
  onChange,
}: PayloadTabProps): React.JSX.Element | null {
  if (!payload) {
    return null;
  }

  return <JsonEditor value={payload} onChange={onChange} />;
}
