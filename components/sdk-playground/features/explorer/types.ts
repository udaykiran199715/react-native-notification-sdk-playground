import { PlaygroundScenario } from "../../scenarios";

export interface ExplorerState {
  selectedCategory: string;

  selectedScenario?: PlaygroundScenario;

  search: string;
}
