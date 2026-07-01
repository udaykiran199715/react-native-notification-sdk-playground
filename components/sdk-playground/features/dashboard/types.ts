export interface StatusItem {
  title: string;

  status: "success" | "warning" | "error" | "unknown";

  value: string;
}

export interface MetricItem {
  title: string;

  value: number;

  description?: string;
}

export interface QuickAction {
  id: string;

  title: string;

  icon: string;

  onPress(): void;
}

export interface DashboardState {
  initialized: boolean;

  sdkVersion: string;

  platform: string;

  currentUser?: string;

  token?: string;

  statuses: StatusItem[];

  metrics: MetricItem[];
}
