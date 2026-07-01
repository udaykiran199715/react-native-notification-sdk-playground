import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import Notifications, {
  NotificationUser,
  type PermissionStatus,
} from "react-native-notification-sdk";

import { TestUsers } from "@/components/sdk-playground/data/TestUsers";

export function useDevice() {
  const [permission, setPermission] = useState<PermissionStatus | "Unknown">(
    "Unknown",
  );

  const [token, setToken] = useState<string>();

  const [currentUser, setCurrentUser] = useState<
    NotificationUser | undefined
  >();

  const [selectedUser, setSelectedUser] = useState<
    NotificationUser | undefined
  >({ id: TestUsers[0]?.id, metadata: { name: TestUsers[0]?.name } });

  const [isLoading, setIsLoading] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const [permissionStatus, fcmToken, user] = await Promise.all([
        Notifications.getStatus(),
        Notifications.getToken(),
        Notifications.getCurrentUser(),
      ]);

      setPermission(permissionStatus.permission);
      setToken(fcmToken);
      setCurrentUser(user ?? undefined);
    } catch (error) {
      console.error("Failed to refresh device information.", error);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const registerUser = useCallback(async () => {
    if (!selectedUser) {
      return;
    }

    try {
      setIsLoading(true);

      await Notifications.setCurrentUser(selectedUser);

      await refresh();
    } finally {
      setIsLoading(false);
    }
  }, [refresh, selectedUser]);

  const clearUser = useCallback(async () => {
    try {
      setIsLoading(true);

      await Notifications.clearCurrentUser();

      await refresh();
    } finally {
      setIsLoading(false);
    }
  }, [refresh]);

  const selectUser = (userId: string) => {
    const user = TestUsers.find((item) => item.id === userId);

    if (!user) {
      return;
    }

    setSelectedUser({
      id: user.id,
      metadata: {
        name: user.name,
      },
    });
  };

  return {
    sdkVersion: "2.0.0",

    platform: Platform.OS,

    reactNativeVersion: Platform.constants?.reactNativeVersion
      ? `${Platform.constants.reactNativeVersion.major}.${Platform.constants.reactNativeVersion.minor}.${Platform.constants.reactNativeVersion.patch}`
      : "Unknown",

    deviceId: "Not Available",

    firebaseApp: "Default",

    projectId: "Unknown",

    permission,

    token,

    currentUser,

    selectedUser,

    setSelectedUser: selectUser,

    registerUser,

    clearUser,

    refresh,

    isLoading,

    testUsers: TestUsers,
  };
}
