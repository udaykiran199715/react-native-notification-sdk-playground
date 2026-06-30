import { KeyValueCard } from "@/components/sdk-playground/common";
import React from "react";

type Props = {
  permission: string;
};

export function PermissionInfoCard({ permission }: Props) {
  return <KeyValueCard title="Notification Permission" value={permission} />;
}
