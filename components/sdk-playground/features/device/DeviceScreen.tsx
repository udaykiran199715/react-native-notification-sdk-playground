import React from "react";

import { Screen, Section } from "../../common";
import { CurrentUserCard } from "./components/CurrentUserCard";
import { DeviceInfoCard } from "./components/DeviceInfoCard";
import { FirebaseInfoCard } from "./components/FirebaseInfoCard";
import { PermissionInfoCard } from "./components/PermissionInfoCard";
import { TokenInfoCard } from "./components/TokenInfoCard";
import { useDevice } from "./hooks/useDevice";

export function DeviceScreen() {
  const device = useDevice();

  return (
    <Screen>
      <Section title="SDK">
        <DeviceInfoCard
          sdkVersion={device.sdkVersion}
          platform={device.platform}
          reactNativeVersion={device.reactNativeVersion}
        />
      </Section>
      <CurrentUserCard
        testUsers={device.testUsers}
        selectedUser={device.selectedUser}
        onChangeUser={device.setSelectedUser}
        currentUser={device.currentUser}
        isLoading={device.isLoading}
        onRegister={device.registerUser}
        onClear={device.clearUser}
      />

      <Section title="Firebase">
        <FirebaseInfoCard
          firebaseApp={device.firebaseApp}
          projectId={device.projectId}
        />
      </Section>

      <Section title="Permissions">
        <PermissionInfoCard permission={device.permission} />
      </Section>

      <Section title="Device">
        <TokenInfoCard
          token={device.token}
          deviceId={device.deviceId}
          currentUser={device.currentUser}
        />
      </Section>
    </Screen>
  );
}
