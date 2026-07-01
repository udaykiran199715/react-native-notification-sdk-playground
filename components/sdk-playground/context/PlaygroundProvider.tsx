import React, {
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { NotificationPayload } from "react-native-notification-sdk";

import { PlaygroundContext } from "./PlaygroundContext";
import type {
  PlaygroundContextValue,
  PlaygroundLog,
  PlaygroundState,
  TimelineItem,
} from "./types";

const INITIAL_STATE: PlaygroundState = {
  selectedScenarioId: undefined,

  selectedCategory: undefined,

  searchQuery: "",

  favorites: [],

  notificationHistory: [],

  timeline: [],

  logs: [],
};

export function PlaygroundProvider({
  children,
}: PropsWithChildren): React.JSX.Element {
  const [state, setState] = useState<PlaygroundState>(INITIAL_STATE);

  const setSelectedScenario = useCallback((id?: string) => {
    setState((previous) => ({
      ...previous,
      selectedScenarioId: id,
    }));
  }, []);

  const setSelectedCategory = useCallback((category?: string) => {
    setState((previous) => ({
      ...previous,
      selectedCategory: category,
    }));
  }, []);

  const setSearchQuery = useCallback((query: string) => {
    setState((previous) => ({
      ...previous,
      searchQuery: query,
    }));
  }, []);

  const addNotification = useCallback((notification: NotificationPayload) => {
    setState((previous) => ({
      ...previous,
      notificationHistory: [notification, ...previous.notificationHistory],
    }));
  }, []);

  const clearNotifications = useCallback(() => {
    setState((previous) => ({
      ...previous,
      notificationHistory: [],
    }));
  }, []);

  const addTimeline = useCallback((item: TimelineItem) => {
    setState((previous) => ({
      ...previous,
      timeline: [item, ...previous.timeline],
    }));
  }, []);

  const clearTimeline = useCallback(() => {
    setState((previous) => ({
      ...previous,
      timeline: [],
    }));
  }, []);

  const addLog = useCallback((log: PlaygroundLog) => {
    setState((previous) => ({
      ...previous,
      logs: [log, ...previous.logs],
    }));
  }, []);

  const clearLogs = useCallback(() => {
    setState((previous) => ({
      ...previous,
      logs: [],
    }));
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    setState((previous) => {
      const exists = previous.favorites.includes(id);

      return {
        ...previous,
        favorites: exists
          ? previous.favorites.filter((favorite) => favorite !== id)
          : [...previous.favorites, id],
      };
    });
  }, []);

  const reset = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  const value = useMemo<PlaygroundContextValue>(
    () => ({
      state,

      setSelectedScenario,

      setSelectedCategory,

      setSearchQuery,

      addNotification,

      clearNotifications,

      addTimeline,

      clearTimeline,

      addLog,

      clearLogs,

      toggleFavorite,

      reset,
    }),
    [
      state,
      setSelectedScenario,
      setSelectedCategory,
      setSearchQuery,
      addNotification,
      clearNotifications,
      addTimeline,
      clearTimeline,
      addLog,
      clearLogs,
      toggleFavorite,
      reset,
    ],
  );

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
}
