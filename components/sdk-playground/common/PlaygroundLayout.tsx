import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  header: React.ReactNode;
  navigation: React.ReactNode;
  children: React.ReactNode;
};

export function PlaygroundLayout({
  header,
  navigation,
  children,
}: Props): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-neutral-950">
      {header}

      {navigation}

      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
