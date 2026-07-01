export interface ScenarioExecutionResult {
  readonly status: "idle" | "running" | "success" | "failed";

  readonly event?: string;

  readonly startedAt?: number;

  readonly finishedAt?: number;

  readonly duration?: number;

  readonly error?: string;
}
