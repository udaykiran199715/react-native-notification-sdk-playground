import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { FUNCTION_REGION } from "../constants/FunctionConfig";
import { FirestoreCollections } from "../constants/FirestoreCollections";
import { DeviceRepository } from "../repositories/DeviceRepository";
import { JobRepository } from "../repositories/JobRepository";
import { JobProcessor } from "../processors/JobProcessor";
import { FirebaseNotificationSender } from "../services/FirebaseNotificationSender";

const processor = new JobProcessor(
  new JobRepository(),
  new DeviceRepository(),
  new FirebaseNotificationSender(),
);

export const onNotificationJobCreated = onDocumentCreated(
  {
    document: `${FirestoreCollections.JOBS}/{jobId}`,
    region: FUNCTION_REGION,
  },
  async (event) => {
    const jobId = event.params.jobId;
    if (!jobId) return;
    await processor.process(jobId);
  },
);
