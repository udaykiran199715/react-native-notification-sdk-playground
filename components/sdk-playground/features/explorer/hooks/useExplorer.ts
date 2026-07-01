import { useEffect, useMemo, useState } from "react";

import { ScenarioRegistry } from "@/components/sdk-playground/scenarios";
import type { ScenarioCategory } from "@/components/sdk-playground/scenarios/types/ScenarioCategory";
import Notifications, {
  NotificationPayload,
} from "react-native-notification-sdk";

export function useExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<ScenarioCategory>(
    ScenarioRegistry.getCategories()[0],
  );

  const [selectedScenarioId, setSelectedScenarioId] = useState<string>("");

  const [payload, setPayload] = useState<NotificationPayload | undefined>();

  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "FAILED">("IDLE");

  const [lastEvent, setLastEvent] = useState("");

  const [lastPayload, setLastPayload] = useState("");
  const [isEmitting, setIsEmitting] = useState(false);

  const selectedScenario = useMemo(
    () => ScenarioRegistry.getById(selectedScenarioId),
    [selectedScenarioId],
  );

  const categories = useMemo(
    () =>
      ScenarioRegistry.getCategories()
        .slice()
        .sort()
        .map((category) => ({
          label: category,
          value: category,
        })),
    [],
  );

  const filteredScenarios = useMemo(
    () => ScenarioRegistry.getByCategory(selectedCategory),
    [selectedCategory],
  );

  const scenarioOptions = useMemo(
    () =>
      filteredScenarios.map((scenario) => ({
        label: scenario.title,
        value: scenario.id,
      })),
    [filteredScenarios],
  );

  useEffect(() => {
    if (filteredScenarios.length === 0) {
      setSelectedScenarioId("");
      return;
    }

    setSelectedScenarioId(filteredScenarios[0].id);
  }, [filteredScenarios]);

  useEffect(() => {
    const selScenario = ScenarioRegistry.getById(selectedScenarioId);
    if (selScenario?.payload) {
      setPayload(selScenario?.payload);
    } else {
      setPayload(undefined);
    }
  }, [selectedScenarioId]);

  const updatePayload = (payload: NotificationPayload) => {
    setPayload(payload);
  };

  const resetPayload = () => {
    if (!selectedScenario) {
      return;
    }

    setPayload(JSON.parse(JSON.stringify(selectedScenario.payload)));
  };

  const emitScenario = async () => {
    console.log("Event:", selectedScenario?.event);
    console.log("Payload:", payload);
    if (!selectedScenario || !payload) {
      return {
        success: false,
        error: "No scenario selected.",
      };
    }

    setIsEmitting(true);

    try {
      let status = await Notifications.getStatus();

      if (status.permission !== "authorized") {
        await Notifications.requestPermission();

        status = await Notifications.getStatus();

        if (status.permission !== "authorized") {
          return {
            success: false,
            error: "Notification permission was not granted.",
          };
        }
      }

      await Notifications.emit(selectedScenario.event, payload);

      setStatus("SUCCESS");
      setLastEvent(selectedScenario.event);
      setLastPayload(JSON.stringify(payload, null, 2));

      return {
        success: true,
      };
    } catch (error) {
      setStatus("FAILED");

      return {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to emit notification.",
      };
    } finally {
      setIsEmitting(false);
    }
  };

  const isPayloadDirty =
    JSON.stringify(payload) !== JSON.stringify(selectedScenario?.payload);
  return {
    categories,

    selectedCategory,
    setSelectedCategory,

    scenarioOptions,

    selectedScenarioId,
    setSelectedScenarioId,

    selectedScenario,

    payload,

    updatePayload,

    resetPayload,

    isPayloadDirty,

    emitScenario,

    status,

    lastEvent,

    lastPayload,

    isEmitting,
  };
}
