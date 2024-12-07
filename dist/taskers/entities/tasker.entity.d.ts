export declare class Tasker {
    id: number;
    user_id: number;
    skill_id: number;
    work_area: string;
    work_schedule: string;
    description: string;
    experience: string;
    expected_rate: number;
    created_at: Date;
    updated_at: Date;
    updateTimestamps(): void;
    updateTimestamp(): void;
}
