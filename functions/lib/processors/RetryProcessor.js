"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryProcessor = void 0;
class RetryProcessor {
    jobRepository;
    jobProcessor;
    maxRetries;
    constructor(jobRepository, jobProcessor, maxRetries = 3) {
        this.jobRepository = jobRepository;
        this.jobProcessor = jobProcessor;
        this.maxRetries = maxRetries;
    }
    async process() {
        const jobs = await this.jobRepository.getRetryableJobs(this.maxRetries);
        for (const job of jobs) {
            try {
                await this.jobProcessor.process(job.id);
            }
            catch (error) {
                // Continue processing remaining jobs
                console.error(`Retry failed for job ${job.id}:`, error);
            }
        }
    }
}
exports.RetryProcessor = RetryProcessor;
