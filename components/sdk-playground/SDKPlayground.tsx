import React, { useMemo, useState } from "react";

import { PlaygroundHeader } from "./common";
import { PlaygroundLayout } from "./common/PlaygroundLayout";
import { PlaygroundNavigation } from "./common/PlaygroundNavigation";
import { PlaygroundProvider } from "./context";
import { AutomationScreen } from "./features/automation";
import { DashboardScreen } from "./features/dashboard";
import { DeviceScreen } from "./features/device";
import { ExplorerScreen } from "./features/explorer";
import { SettingsScreen } from "./features/settings";

export type PlaygroundTab =
  | "dashboard"
  | "explorer"
  | "automation"
  | "device"
  | "settings";

export function SDKPlayground(): React.JSX.Element {
  const [tab, setTab] = useState<PlaygroundTab>("dashboard");

  const content = useMemo(() => {
    switch (tab) {
      case "dashboard":
        return <DashboardScreen />;

      case "explorer":
        return <ExplorerScreen />;

      case "automation":
        return <AutomationScreen />;

      case "device":
        return <DeviceScreen />;

      case "settings":
        return <SettingsScreen />;

      default:
        return <DashboardScreen />;
    }
  }, [tab]);

  return (
    <PlaygroundProvider>
      <PlaygroundLayout
        header={<PlaygroundHeader />}
        navigation={<PlaygroundNavigation value={tab} onChange={setTab} />}
      >
        {content}
      </PlaygroundLayout>
    </PlaygroundProvider>
  );
}
