import { KeyValueCard } from "@/components/sdk-playground/common";
import React from "react";

type Props = {
  firebaseApp: string;

  projectId: string;
};

export function FirebaseInfoCard({ firebaseApp, projectId }: Props) {
  return (
    <>
      <KeyValueCard title="Firebase App" value={firebaseApp} />

      <KeyValueCard title="Project ID" value={projectId} />
    </>
  );
}
