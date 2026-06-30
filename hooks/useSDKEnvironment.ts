import { SDKEnvironment } from "@/types/playground";
import { useEffect, useState } from "react";
import { sdkTestService } from "../services/SDKTestService";

export function useSDKEnvironment() {
  const [environment, setEnvironment] = useState<SDKEnvironment>();

  const refresh = async () => {
    setEnvironment(await sdkTestService.getEnvironment());
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    environment,

    refresh,
  };
}
