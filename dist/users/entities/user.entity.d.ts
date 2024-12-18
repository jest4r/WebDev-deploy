import { Role } from 'src/enum/Role.enum';
import { Profile } from './profile.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    role: Role;
    create_at: Date;
    updated_at: Date;
    updateTimestamps(): void;
    updateTimestamp(): void;
    profile: Profile;
    tasker: Tasker;
}
