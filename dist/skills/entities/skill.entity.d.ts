import { Tasker } from 'src/taskers/entities/tasker.entity';
export declare class Skill {
    id: number;
    name: string;
    description: string;
    taskers: Tasker[];
}
