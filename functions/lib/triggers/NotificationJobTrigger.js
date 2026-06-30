"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onNotificationJobCreated = void 0;
const firestore_1 = require("firebase-functions/v2/firestore");
const FunctionConfig_1 = require("../constants/FunctionConfig");
const FirestoreCollections_1 = require("../constants/FirestoreCollections");
const DeviceRepository_1 = require("../repositories/DeviceRepository");
const JobRepository_1 = require("../repositories/JobRepository");
const JobProcessor_1 = require("../processors/JobProcessor");
const FirebaseNotificationSender_1 = require("../services/FirebaseNotificationSender");
const processor = new JobProcessor_1.JobProcessor(new JobRepository_1.JobRepository(), new DeviceRepository_1.DeviceRepository(), new FirebaseNotificationSender_1.FirebaseNotificationSender());
exports.onNotificationJobCreated = (0, firestore_1.onDocumentCreated)({
    document: `${FirestoreCollections_1.FirestoreCollections.JOBS}/{jobId}`,
    region: FunctionConfig_1.FUNCTION_REGION,
}, async (event) => {
    const jobId = event.params.jobId;
    if (!jobId)
        return;
    await processor.process(jobId);
});
