import { Skill } from 'src/skills/entities/skill.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Tasker {
    id: number;
    work_area: string;
    experience: string;
    completed_tasks: number;
    avg_rating: number;
    rating_count: number;
    user: User;
    skills: Skill[];
    applied_tasks: Task[];
    tasks: Task[];
    created_at: Date;
    updated_at: Date;
    setDates(): void;
    updateDates(): void;
}
