import React from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";

type Props = {
  master: React.ReactNode;
  detail: React.ReactNode;
};

const BREAKPOINT = 1024;

export function MasterDetailLayout({
  master,
  detail,
}: Props): React.JSX.Element {
  const { width } = useWindowDimensions();

  const isDesktop = width >= BREAKPOINT;

  if (!isDesktop) {
    return (
      <View className="flex-1 gap-4">
        <View>{master}</View>

        <View>{detail}</View>
      </View>
    );
  }

  return (
    <View className="flex-1 flex-row gap-4">
      <View className="w-80">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {master}
        </ScrollView>
      </View>

      <View className="flex-1">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          {detail}
        </ScrollView>
      </View>
    </View>
  );
}
