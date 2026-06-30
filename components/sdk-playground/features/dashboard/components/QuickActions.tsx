import { Card } from "@/components/sdk-playground/common";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

export function QuickActions(): React.JSX.Element {
  const router = useRouter();

  const actions = [
    {
      title: "Scenarios",
      route: "/(tabs)/scenarios",
    },
    {
      title: "Playground",
      route: "/(tabs)/sdk-playground",
    },
    {
      title: "Notifications",
      route: "/(tabs)/notifications",
    },
    {
      title: "Analytics",
      route: "/(tabs)/analytics",
    },
  ];

  return (
    <View className="gap-3">
      {actions.map((action) => (
        <Pressable
          key={action.title}
          onPress={() => router.push(action.route as never)}
        >
          <Card>
            <Text className="text-lg font-semibold text-neutral-900 dark:text-white">
              {action.title}
            </Text>
          </Card>
        </Pressable>
      ))}
    </View>
  );
}
