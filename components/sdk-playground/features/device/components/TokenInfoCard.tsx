import { KeyValueCard } from "@/components/sdk-playground/common";
import React from "react";

type Props = {
  token?: string;

  deviceId: string;

  currentUser?: string;
};

export function TokenInfoCard({ token, deviceId, currentUser }: Props) {
  return (
    <>
      <KeyValueCard title="Current User" value={currentUser} />

      <KeyValueCard title="Device ID" value={deviceId} />

      <KeyValueCard title="FCM Token" value={token} numberOfLines={4} />
    </>
  );
}
