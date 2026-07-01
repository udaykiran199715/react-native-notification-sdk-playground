import { usePlayground } from "@/components/sdk-playground/context";
import { Alert } from "react-native";

export function useSettings() {
  const playground = usePlayground();

  const clearNotifications = () => {
    playground.clearNotifications();

    Alert.alert("Success", "Notification history cleared.");
  };

  const clearTimeline = () => {
    playground.clearTimeline();

    Alert.alert("Success", "Timeline cleared.");
  };

  const resetPlayground = () => {
    playground.reset();

    Alert.alert("Success", "Playground reset successfully.");
  };

  return {
    clearNotifications,

    clearTimeline,

    resetPlayground,
  };
}
