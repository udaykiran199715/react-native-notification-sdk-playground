import Clipboard from "@react-native-clipboard/clipboard";
import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import Notifications from "react-native-notification-sdk";

import { PlaygroundCard } from "../sdk-playground";
import { useScenarios } from "../sdk-playground/scenarios/hooks";
import { ScenarioExecutionResult as ExecutionList } from "../sdk-playground/scenarios/types/ScenarioExecutionResult";
import ScenarioActions from "./ScenarioActions";
import ScenarioCategoryPicker from "./ScenarioCategoryPicker";
import ScenarioDescription from "./ScenarioDescription";
import ScenarioExecutionResult from "./ScenarioExecutionResult";
import ScenarioHeader from "./ScenarioHeader";
import ScenarioPayloadEditor from "./ScenarioPayloadEditor";
import ScenarioPicker from "./ScenarioPicker";

export default function ScenarioExplorer() {
  const {
    categories,
    category,
    selectCategory,
    scenarios,
    scenario,
    scenarioId,
    selectScenario,
  } = useScenarios();

  const [payloadText, setPayloadText] = useState("");

  const [running, setRunning] = useState(false);

  const [result, setResult] = useState<ExecutionList>({
    status: "idle",
  });

  useEffect(() => {
    if (!scenario) {
      setPayloadText("");
      return;
    }

    setPayloadText(JSON.stringify(scenario.payload.data, null, 2));
  }, [scenario]);

  const resetPayload = () => {
    if (!scenario) {
      return;
    }

    setPayloadText(JSON.stringify(scenario.payload.data, null, 2));
  };

  const formatPayload = () => {
    try {
      const parsed = JSON.parse(payloadText);

      setPayloadText(JSON.stringify(parsed, null, 2));
    } catch {
      Alert.alert("Invalid JSON", "Payload contains invalid JSON.");
    }
  };

  const copyPayload = () => {
    Clipboard.setString(payloadText);

    Alert.alert("Copied", "Payload copied to clipboard.");
  };

  const runScenario = async () => {
    if (!scenario) {
      return;
    }

    const startedAt = Date.now();

    setRunning(true);

    setResult({
      status: "running",
      event: scenario.event,
      startedAt,
    });

    try {
      const payload = {
        ...scenario.payload,
        data: JSON.parse(payloadText),
      };

      await Notifications.emit(scenario.event, payload);

      const finishedAt = Date.now();

      setResult({
        status: "success",
        event: scenario.event,
        startedAt,
        finishedAt,
        duration: finishedAt - startedAt,
      });
    } catch (error) {
      const finishedAt = Date.now();

      setResult({
        status: "failed",
        event: scenario.event,
        startedAt,
        finishedAt,
        duration: finishedAt - startedAt,
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setRunning(false);
    }
  };

  return (
    <PlaygroundCard>
      <ScenarioHeader
        title="Scenario Lab"
        subtitle="Run real-world notification workflows"
      />

      <ScenarioCategoryPicker
        categories={categories}
        value={category}
        onChange={selectCategory}
      />

      <ScenarioPicker
        scenarios={scenarios}
        value={scenarioId}
        onChange={selectScenario}
      />

      <ScenarioDescription scenario={scenario} />

      {scenario ? (
        <ScenarioPayloadEditor
          value={payloadText}
          onChange={setPayloadText}
          onReset={resetPayload}
        />
      ) : null}

      <ScenarioActions
        loading={running}
        onRun={runScenario}
        onReset={resetPayload}
        onCopy={copyPayload}
        onFormat={formatPayload}
      />
      <ScenarioExecutionResult result={result} />
    </PlaygroundCard>
  );
}
