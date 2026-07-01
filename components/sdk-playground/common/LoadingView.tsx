import React from "react";
import { ActivityIndicator, View } from "react-native";

export function LoadingView(): React.JSX.Element {
  return (
    <View className="flex-1 items-center justify-center py-10">
      <ActivityIndicator size="large" />
    </View>
  );
}
