import { onSchedule } from "firebase-functions/v2/scheduler";

import { FUNCTION_REGION } from "../constants/FunctionConfig";
import { DeviceRepository } from "../repositories/DeviceRepository";
import { JobRepository } from "../repositories/JobRepository";
import { JobProcessor } from "../processors/JobProcessor";
import { RetryProcessor } from "../processors/RetryProcessor";
import { FirebaseNotificationSender } from "../services/FirebaseNotificationSender";

const jobRepository = new JobRepository();

const processor = new JobProcessor(
  jobRepository,
  new DeviceRepository(),
  new FirebaseNotificationSender(),
);

const retryProcessor = new RetryProcessor(jobRepository, processor);

export const retryNotificationJobs = onSchedule(
  {
    schedule: "every 5 minutes",
    region: FUNCTION_REGION,
  },
  async () => {
    await retryProcessor.process();
  },
);
