import { Gender } from 'src/enum/Gender.enum';
import { User } from './user.entity';
export declare class Profile {
    id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    gender: Gender;
    description: string;
    birth_date: Date;
    create_at: Date;
    updated_at: Date;
    updateTimestamps(): void;
    updateTimestamp(): void;
    user: User;
}
