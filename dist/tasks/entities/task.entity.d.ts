import { Status } from 'src/enum/Status.enum';
import { Skill } from 'src/skills/entities/skill.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Task {
    id: number;
    title: string;
    description: string;
    task_status: Status;
    district: string;
    ward: string;
    detail_address: string;
    estimated_duration: number;
    fee_per_hour: string;
    start_date: Date;
    end_date: Date;
    created_at: Date;
    updated_at: Date;
    setDefaults(): void;
    setUpdatedAt(): void;
    user: User;
    taskers: Tasker[];
    tasker: Tasker;
    skill: Skill;
}
