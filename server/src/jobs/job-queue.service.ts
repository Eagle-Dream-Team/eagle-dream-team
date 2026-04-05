import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class JobQueueService {
  private readonly logger = new Logger(JobQueueService.name);

  enqueue(task: () => Promise<void>): void {
    task().catch((err) =>
      this.logger.error(`Background job failed: ${err.message}`),
    );
  }
}
