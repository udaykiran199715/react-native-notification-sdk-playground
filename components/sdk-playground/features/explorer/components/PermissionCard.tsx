import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import Notifications, {
  AutomationProvider,
} from "react-native-notification-sdk";

import InfoRow from "../common/InfoRow";
import PlaygroundButton from "../common/PlaygroundButton";
import PlaygroundCard from "../common/PlaygroundCard";
import PlaygroundHeader from "../common/PlaygroundHeader";
import { Rules } from "../models/Rules";

export default function PermissionCard() {
  const [sdkInitialized, setSdkInitialized] = useState(false);
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  const [notifeeInitialized, setNotifeeInitialized] = useState(false);
  const [permission, setPermission] = useState("-");
  const [token, setToken] = useState("-");

  useEffect(() => {
    if (sdkInitialized) {
      refresh();
    }
  }, [sdkInitialized]);
  const refresh = async () => {
    if (sdkInitialized) {
      try {
        const status = await Notifications.getStatus();

        setSdkInitialized(status.initialized);
        setFirebaseInitialized(status.firebaseInitialized);
        setNotifeeInitialized(status.notifeeInitialized);
        setPermission(String(status.permission));

        if (status.tokenAvailable) {
          setToken(await Notifications.getToken());
        } else {
          setToken("-");
        }
      } catch (error) {
        console.error(error);

        Alert.alert("SDK Not Initialized", "Please initialize the SDK first.");
      }
    }
  };

  const initialize = async () => {
    try {
      // await Notifications.initialize({
      //   debug: true,
      //   foreground: {
      //     displayNotifications: true,
      //   },
      // });

      await Notifications.initialize({
        debug: true,
        foreground: {
          displayNotifications: true,
        },
        background: {
          displayNotifications: true,
        },
        automation: {
          enabled: true,
          provider: AutomationProvider.FIREBASE,
          firebase: {},
          rules: Rules,
        },
      });
      setSdkInitialized(true);

      Alert.alert("Success", "SDK initialized.");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Initialization failed.");
    }
  };
  const requestPermission = async () => {
    try {
      await Notifications.requestPermission();

      await refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PlaygroundCard>
      <PlaygroundHeader title="Permission" subtitle="SDK Permission Testing" />

      <InfoRow label="SDK Initialized" value={sdkInitialized ? "Yes" : "No"} />

      <InfoRow
        label="Firebase"
        value={firebaseInitialized ? "Initialized" : "Not Initialized"}
      />

      <InfoRow
        label="Notifee"
        value={notifeeInitialized ? "Initialized" : "Not Initialized"}
      />

      <InfoRow label="Permission" value={permission} />

      <InfoRow label="FCM Token" value={token} />

      <PlaygroundButton title="Initialize SDK" onPress={initialize} />

      <PlaygroundButton
        title="Request Permission"
        onPress={requestPermission}
      />

      <PlaygroundButton title="Refresh Status" onPress={refresh} />
    </PlaygroundCard>
  );
}
