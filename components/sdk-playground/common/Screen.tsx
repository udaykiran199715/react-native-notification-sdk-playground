import React from "react";
import { ScrollView, type ScrollViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = ScrollViewProps & {
  children: React.ReactNode;
};

export function Screen({ children, ...props }: Props): React.JSX.Element {
  return (
    <SafeAreaView className="flex-1 bg-neutral-100 dark:bg-black">
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
        {...props}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}
