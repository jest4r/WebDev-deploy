import { Task } from 'src/tasks/entities/task.entity';
export declare class Review {
    id: number;
    rating: number;
    comment: string;
    image: string;
    task: Task;
}
