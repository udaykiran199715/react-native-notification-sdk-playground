import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sdk-playground"
        options={{
          title: "SDK",
          tabBarIcon: ({ color, size }) => (
            <IconSymbol size={28} name="hammer" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="scenarios"
        options={{
          title: "Scenarios",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="list.bullet" color={color} />
          ),
        }}
      />
      {/* Hidden deep link targets */}
      {[
        "tracking",
        "driver",
        "warehouse",
        "workspace",
        "projects",
        "billing",
        "hrms",
        "manager",
        "announcements",
        "health",
        "appointments",
        "hospital",
        "banking",
        "accounts",
        "security",
        "social",
        "profile",
        "feed",
        "chat",
        "groups",
        "calls",
        "orders/details",
        "delivery/details",
        "refund/details",
        "deliveries",
      ].map((name) => (
        <Tabs.Screen key={name} name={name} options={{ href: null }} />
      ))}
    </Tabs>
  );
}
