import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, View } from "react-native";

import {
  Button,
  Card,
  Screen,
  Section,
} from "@/components/sdk-playground/common";

type Props = {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  route: string;
};

export function NotificationModuleScreen({
  title,
  icon,
  route,
}: Props): React.JSX.Element {
  const params = useLocalSearchParams();

  const router = useRouter();

  console.log(params, "params");

  return (
    <Screen>
      <Card>
        <View className="flex-row items-center">
          <Ionicons name={icon} size={28} color="#2563EB" />

          <View className="ml-3 flex-1">
            <Text className="text-xl font-bold text-neutral-900 dark:text-white">
              {title}
            </Text>

            <Text className="text-sm text-neutral-500">
              Notification opened successfully
            </Text>
          </View>
        </View>
      </Card>

      <Section title="Navigation">
        <Text className="text-base font-semibold text-neutral-900 dark:text-white">
          {route}
        </Text>
      </Section>

      <Section title="Parameters">
        {Object.keys(params).length === 0 ? (
          <Text className="text-neutral-500">No parameters received.</Text>
        ) : (
          Object.entries(params).map(([key, value]) => (
            <View
              key={key}
              className="border-b border-neutral-200 py-3 dark:border-neutral-800"
            >
              <Text className="text-xs uppercase text-neutral-500">{key}</Text>

              <Text className="mt-1 text-base font-medium text-neutral-900 dark:text-white">
                {Array.isArray(value) ? value.join(", ") : String(value)}
              </Text>
            </View>
          ))
        )}
      </Section>

      <Section title="Raw JSON">
        <ScrollView horizontal>
          <Text className="font-mono text-xs text-neutral-900 dark:text-white">
            {JSON.stringify(params, null, 2)}
          </Text>
        </ScrollView>
      </Section>

      <Button title="Back to Playground" onPress={() => router.back()} />
    </Screen>
  );
}
