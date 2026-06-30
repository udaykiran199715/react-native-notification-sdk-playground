"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryNotificationJobs = void 0;
const scheduler_1 = require("firebase-functions/v2/scheduler");
const FunctionConfig_1 = require("../constants/FunctionConfig");
const DeviceRepository_1 = require("../repositories/DeviceRepository");
const JobRepository_1 = require("../repositories/JobRepository");
const JobProcessor_1 = require("../processors/JobProcessor");
const RetryProcessor_1 = require("../processors/RetryProcessor");
const FirebaseNotificationSender_1 = require("../services/FirebaseNotificationSender");
const jobRepository = new JobRepository_1.JobRepository();
const processor = new JobProcessor_1.JobProcessor(jobRepository, new DeviceRepository_1.DeviceRepository(), new FirebaseNotificationSender_1.FirebaseNotificationSender());
const retryProcessor = new RetryProcessor_1.RetryProcessor(jobRepository, processor);
exports.retryNotificationJobs = (0, scheduler_1.onSchedule)({
    schedule: "every 5 minutes",
    region: FunctionConfig_1.FUNCTION_REGION,
}, async () => {
    await retryProcessor.process();
});
