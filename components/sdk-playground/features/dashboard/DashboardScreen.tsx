import React from "react";
import { View } from "react-native";

import { KeyValueCard, MetricCard, Screen, Section } from "../../common";
import { DashboardHeader } from "./components/DashboardHeader";
import { DiagnosticsCard } from "./components/DiagnosticsCard";
import { QuickActions } from "./components/QuickActions";
import { RecentNotifications } from "./components/RecentNotifications";
import { RecentTimeline } from "./components/RecentTimeline";
import { StatusGrid } from "./components/StatusGrid";
import { useDashboard } from "./hooks/useDashboard";

export function DashboardScreen(): React.JSX.Element {
  const dashboard = useDashboard();

  return (
    <Screen>
      <DashboardHeader version={dashboard.sdkVersion} />

      <Section title="SDK Status">
        <StatusGrid items={dashboard.statuses} />
      </Section>

      <Section title="Current User">
        <KeyValueCard title="Current User" value={dashboard.currentUser} />
      </Section>

      <Section title="FCM Token">
        <KeyValueCard
          title="FCM Token"
          value={dashboard.token}
          numberOfLines={4}
        />
      </Section>

      <Section title="Metrics">
        <View className="flex-row gap-3">
          {dashboard.metrics.map((metric) => (
            <MetricCard
              key={metric.title}
              title={metric.title}
              value={metric.value}
            />
          ))}
        </View>
      </Section>
      <Section title="Quick Actions">
        <QuickActions />
      </Section>

      <Section title="SDK Information">
        <DiagnosticsCard />
      </Section>

      <Section title="Recent Notifications">
        <RecentNotifications />
      </Section>

      <Section title="Timeline">
        <RecentTimeline />
      </Section>
    </Screen>
  );
}
