import { KeyValueCard } from "@/components/sdk-playground/common";
import React from "react";

type Props = {
  sdkVersion: string;

  platform: string;

  reactNativeVersion: string;
};

export function DeviceInfoCard({
  sdkVersion,
  platform,
  reactNativeVersion,
}: Props) {
  return (
    <>
      <KeyValueCard title="SDK Version" value={sdkVersion} />

      <KeyValueCard title="Platform" value={platform} />

      <KeyValueCard title="React Native" value={reactNativeVersion} />
    </>
  );
}
