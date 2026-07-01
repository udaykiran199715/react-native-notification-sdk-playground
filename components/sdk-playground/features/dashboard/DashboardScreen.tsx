import React from "react";

import { Screen, Section } from "../../common";

import { DeviceInfoCard } from "../device/components/DeviceInfoCard";
import { FirebaseInfoCard } from "../device/components/FirebaseInfoCard";
import { PermissionInfoCard } from "../device/components/PermissionInfoCard";
import { TokenInfoCard } from "../device/components/TokenInfoCard";

import { HealthCard } from "./components/HealthCard";
import { StatisticsCard } from "./components/StatisticsCard";
import { useDashboard } from "./hooks/useDashboard";

export function DashboardScreen(): React.JSX.Element {
  const dashboard = useDashboard();

  return (
    <Screen>
      <Section title="SDK">
        <HealthCard healthy={dashboard.healthy} />
      </Section>

      <Section title="Statistics">
        <StatisticsCard
          categories={dashboard.statistics.categories}
          scenarios={dashboard.statistics.scenarios}
          rules={dashboard.statistics.rules}
        />
      </Section>

      <Section title="Device">
        <DeviceInfoCard
          sdkVersion={dashboard.sdkVersion}
          platform="Android"
          reactNativeVersion="0.82"
        />

        <PermissionInfoCard permission={dashboard.permission} />

        <TokenInfoCard
          currentUser={dashboard.currentUser}
          token={dashboard.token}
          deviceId="Not Available"
        />

        <FirebaseInfoCard firebaseApp="Default" projectId="Unknown" />
      </Section>
    </Screen>
  );
}
