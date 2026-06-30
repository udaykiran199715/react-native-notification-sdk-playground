import React from "react";
import { Text } from "react-native";

import { Card } from "@/components/sdk-playground/common";
import { getDiagnostics } from "../services/diagnostics";

export function DiagnosticsCard(): React.JSX.Element {
  const diagnostics = getDiagnostics();

  return (
    <Card>
      <Text className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
        Diagnostics
      </Text>

      <Text className="text-neutral-500">
        SDK Version : {diagnostics.sdkVersion}
      </Text>

      <Text className="text-neutral-500">
        Platform : {diagnostics.platform}
      </Text>

      <Text className="text-neutral-500">
        Initialized : {String(diagnostics.initialized)}
      </Text>

      <Text className="text-neutral-500">
        Firebase : {String(diagnostics.firebase)}
      </Text>

      <Text className="text-neutral-500">
        Automation : {String(diagnostics.automation)}
      </Text>
    </Card>
  );
}
