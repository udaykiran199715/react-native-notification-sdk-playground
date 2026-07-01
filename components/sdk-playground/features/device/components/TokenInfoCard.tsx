import { KeyValueCard } from "@/components/sdk-playground/common";
import React from "react";
import { type NotificationUser } from "react-native-notification-sdk";

type Props = {
  token?: string;

  deviceId: string;

  currentUser?: NotificationUser;
};

export function TokenInfoCard({ token, deviceId, currentUser }: Props) {
  return (
    <>
      <KeyValueCard
        title="Current User"
        value={
          currentUser
            ? `${currentUser.metadata?.name ?? currentUser.id}\n${currentUser.id}`
            : "No user registered"
        }
      />

      <KeyValueCard title="Device ID" value={deviceId} />

      <KeyValueCard title="FCM Token" value={token} numberOfLines={4} />
    </>
  );
}
