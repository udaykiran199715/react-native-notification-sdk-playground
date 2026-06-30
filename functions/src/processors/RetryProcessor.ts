import { JobRepository } from "../repositories/JobRepository";
import { JobProcessor } from "./JobProcessor";

export class RetryProcessor {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly jobProcessor: JobProcessor,
    private readonly maxRetries: number = 3,
  ) {}

  public async process(): Promise<void> {
    const jobs = await this.jobRepository.getRetryableJobs(this.maxRetries);

    for (const job of jobs) {
      try {
        await this.jobProcessor.process(job.id);
      } catch (error) {
        // Continue processing remaining jobs
        console.error(`Retry failed for job ${job.id}:`, error);
      }
    }
  }
}
