import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import "../global.css";

import { Rules } from "@/components/sdk-playground/models/Rules";
import { useEffect } from "react";
import Notifications, {
  AutomationProvider,
  registerBackgroundHandler,
} from "react-native-notification-sdk";

export const unstable_settings = {
  anchor: "(tabs)",
};

registerBackgroundHandler();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    Notifications.initialize({
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
    const unsubscribe = Notifications.on("notificationOpened", (event) => {
      const navigation = event.notification?.navigation;
      console.log(navigation, "navigation", event.notification);
      if (!navigation?.route) {
        return;
      }

      router.push(navigation.route as any);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
