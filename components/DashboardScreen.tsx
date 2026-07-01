import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Linking, Pressable, Text, View } from "react-native";

import { Card, Screen, Section } from "@/components/sdk-playground/common";

const FEATURES = [
  {
    icon: "notifications",
    title: "Notification Testing",
    description: "Emit and validate real-world notification scenarios.",
  },
  {
    icon: "people",
    title: "Audience Targeting",
    description: "Test ALL users and specific user notifications.",
  },
  {
    icon: "git-branch",
    title: "Deep Linking",
    description: "Verify Expo Router navigation from notifications.",
  },
  {
    icon: "phone-portrait",
    title: "Device Management",
    description: "Register users, tokens and permissions.",
  },
  {
    icon: "flame",
    title: "Firebase",
    description: "Validate FCM and Firestore integration.",
  },
  {
    icon: "code-slash",
    title: "SDK Playground",
    description: "Official testing environment for the SDK.",
  },
];

const MODULES = [
  "🏦 Banking",
  "🛒 E-Commerce",
  "💬 Chat",
  "🏥 Healthcare",
  "👨‍💼 HRMS",
  "🚚 Logistics",
  "🏪 Marketplace",
  "☁️ SaaS",
  "👥 Social",
];

const STEPS = [
  "Select a Scenario",
  "Emit Notification",
  "Receive Push Notification",
  "Tap Notification",
  "Navigate via Deep Link",
  "Verify Parameters",
];

export function DashboardScreen(): React.JSX.Element {
  return (
    <Screen>
      {/* Hero */}
      <Card>
        <View className="items-center py-6">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-blue-600">
            <Ionicons name="notifications" size={42} color="#FFFFFF" />
          </View>

          <Text className="mt-5 text-center text-3xl font-bold text-neutral-900 dark:text-white">
            React Native Notification SDK
          </Text>

          <Text className="mt-2 text-center text-xl font-semibold text-blue-600">
            Playground
          </Text>

          <Text className="mt-5 px-2 text-center text-base leading-6 text-neutral-600 dark:text-neutral-300">
            Official demonstration and testing application for{" "}
            <Text className="font-semibold">react-native-notification-sdk</Text>
            .
          </Text>

          <View className="mt-6 rounded-full bg-blue-100 px-5 py-2 dark:bg-blue-900/30">
            <Text className="font-semibold text-blue-700 dark:text-blue-300">
              Version 2.0.0
            </Text>
          </View>

          <Pressable
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3"
            onPress={() =>
              Linking.openURL(
                "https://www.npmjs.com/package/react-native-notification-sdk",
              )
            }
          >
            <Text className="font-semibold text-white">View SDK on NPM</Text>
          </Pressable>
        </View>
      </Card>

      {/* What you can do */}
      <Section title="What You Can Do">
        <View className="flex-row flex-wrap justify-between">
          {FEATURES.map((feature) => (
            <View key={feature.title} className="mb-4 w-[48%]">
              <Card>
                <Ionicons
                  name={feature.icon as any}
                  size={28}
                  color="#2563EB"
                />

                <Text className="mt-3 text-base font-semibold text-neutral-900 dark:text-white">
                  {feature.title}
                </Text>

                <Text className="mt-2 text-sm leading-5 text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </Text>
              </Card>
            </View>
          ))}
        </View>
      </Section>

      {/* Workflow */}
      <Section title="Notification Lifecycle">
        <Card>
          {STEPS.map((step, index) => (
            <View key={step}>
              <View className="flex-row items-center py-3">
                <View className="h-9 w-9 items-center justify-center rounded-full bg-blue-600">
                  <Text className="font-bold text-white">{index + 1}</Text>
                </View>

                <Text className="ml-4 flex-1 text-base font-medium text-neutral-900 dark:text-white">
                  {step}
                </Text>
              </View>

              {index !== STEPS.length - 1 && (
                <View className="ml-4 h-6 w-0.5 bg-neutral-300 dark:bg-neutral-700" />
              )}
            </View>
          ))}
        </Card>
      </Section>

      {/* Modules */}
      <Section title="Supported Modules">
        <Card>
          <View className="flex-row flex-wrap">
            {MODULES.map((module) => (
              <View
                key={module}
                className="mb-3 mr-3 rounded-full bg-neutral-100 px-4 py-2 dark:bg-neutral-800"
              >
                <Text className="font-medium text-neutral-900 dark:text-white">
                  {module}
                </Text>
              </View>
            ))}
          </View>
        </Card>
      </Section>

      {/* Features */}
      <Section title="SDK Highlights">
        <Card>
          {[
            "Dynamic Notification Rules",
            "Dynamic Template Engine",
            "Audience Resolution",
            "Firebase Cloud Messaging",
            "Firestore Integration",
            "Device Registration",
            "Deep Linking",
            "Expo Router",
            "TypeScript Support",
            "React Native Support",
          ].map((feature) => (
            <View key={feature} className="mb-3 flex-row items-center">
              <Ionicons name="checkmark-circle" size={20} color="#16A34A" />

              <Text className="ml-3 text-base text-neutral-900 dark:text-white">
                {feature}
              </Text>
            </View>
          ))}
        </Card>
      </Section>

      {/* About */}
      <Section title="About">
        <Card>
          <View className="mb-4">
            <Text className="text-sm text-neutral-500">Package</Text>

            <Text className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              react-native-notification-sdk
            </Text>
          </View>

          <View className="mb-4">
            <Text className="text-sm text-neutral-500">Playground Version</Text>

            <Text className="mt-1 text-base font-semibold text-neutral-900 dark:text-white">
              2.0.0
            </Text>
          </View>

          <View>
            <Text className="text-sm text-neutral-500">Purpose</Text>

            <Text className="mt-1 text-base leading-6 text-neutral-900 dark:text-white">
              The Playground demonstrates every major feature of the React
              Native Notification SDK including notification rules, audience
              targeting, Firebase integration, device registration and deep
              linking using Expo Router.
            </Text>
          </View>
        </Card>
      </Section>

      <Card>
        <View className="items-center py-2">
          <Text className="text-center text-lg font-bold text-neutral-900 dark:text-white">
            🚀 Ready to Explore?
          </Text>

          <Text className="mt-3 text-center leading-6 text-neutral-600 dark:text-neutral-400">
            Open the <Text className="font-semibold">Explorer</Text> tab to
            browse scenarios, emit notifications, and validate the complete
            notification lifecycle.
          </Text>
        </View>
      </Card>
    </Screen>
  );
}
