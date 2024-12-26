import { Task } from 'src/tasks/entities/task.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
export declare const taskerConfirmationTemplate: (acceptUrl: string, rejectUrl: string, task: Task, tasker: Tasker) => string;
