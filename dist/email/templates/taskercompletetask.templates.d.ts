import { Task } from 'src/tasks/entities/task.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
export declare const taskerCompleteTask: (task: Task, tasker: Tasker, viewTaskDetailsUrl: string) => string;
