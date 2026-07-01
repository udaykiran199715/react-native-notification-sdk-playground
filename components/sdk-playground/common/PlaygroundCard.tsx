import React, { PropsWithChildren } from "react";
import { View } from "react-native";

export function PlaygroundCard({ children }: PropsWithChildren) {
  return (
    <View
      className="bg-white mb-[18px] rounded-2xl p-[18px] shadow-sm"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {children}
    </View>
  );
}
