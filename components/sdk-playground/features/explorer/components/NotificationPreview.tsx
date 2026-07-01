import React from "react";

import type { NotificationPayload } from "react-native-notification-sdk";

import { Card } from "@/components/sdk-playground/common";
import { NotificationBody } from "./NotificationBody";
import { NotificationHeader } from "./NotificationHeader";
import { NotificationImage } from "./NotificationImage";
import { NotificationMetadata } from "./NotificationMetadata";
import { NotificationNavigation } from "./NotificationNavigation";

type Props = {
  payload: NotificationPayload;
};

export function NotificationPreview({ payload }: Props): React.JSX.Element {
  return (
    <Card>
      <NotificationHeader title={payload.title} />

      <NotificationBody body={payload.body} />

      <NotificationImage image={payload.imageUrl} />

      <NotificationNavigation payload={payload} />

      <NotificationMetadata payload={payload} />
    </Card>
  );
}
