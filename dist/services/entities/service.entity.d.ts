import { Task } from 'src/tasks/entities/task.entity';
export declare class Service {
    id: number;
    title: string;
    range: string;
    createdAt: Date;
    updatedAt: Date;
    setCreatedAt(): void;
    setUpdatedAt(): void;
    tasks: Task[];
}
