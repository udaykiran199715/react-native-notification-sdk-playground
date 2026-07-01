import type { NotificationPayload } from "react-native-notification-sdk";

export type PlaygroundLogLevel = "info" | "success" | "warning" | "error";

export interface PlaygroundLog {
  id: string;

  timestamp: number;

  level: PlaygroundLogLevel;

  message: string;

  metadata?: Record<string, unknown>;
}

export interface TimelineItem {
  id: string;

  timestamp: number;

  title: string;

  description?: string;

  type: TimelineStage;
}

export enum TimelineStage {
  SCENARIO = "scenario",
  RULE = "rule",
  AUTOMATION = "automation",
  FIRESTORE = "firestore",
  CLOUD_FUNCTION = "cloud-function",
  FCM = "fcm",
  RECEIVED = "received",
  DISPLAYED = "displayed",
  OPENED = "opened",
  NAVIGATION = "navigation",
}

export interface PlaygroundState {
  selectedScenarioId?: string;

  selectedCategory?: string;

  searchQuery: string;

  favorites: string[];

  notificationHistory: NotificationPayload[];

  timeline: TimelineItem[];

  logs: PlaygroundLog[];
}

export interface PlaygroundContextValue {
  state: PlaygroundState;

  setSelectedScenario(id?: string): void;

  setSelectedCategory(category?: string): void;

  setSearchQuery(query: string): void;

  addNotification(notification: NotificationPayload): void;

  clearNotifications(): void;

  addTimeline(item: TimelineItem): void;

  clearTimeline(): void;

  addLog(log: PlaygroundLog): void;

  clearLogs(): void;

  toggleFavorite(id: string): void;

  reset(): void;
}
