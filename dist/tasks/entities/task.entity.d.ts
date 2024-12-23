import { Status } from 'src/enum/Status.enum';
import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Task {
    id: number;
    address_id: number;
    title: string;
    description: string;
    service_id: number;
    amount: string;
    status: Status;
    user_id: number;
    tasker_id: number;
    created_at: Date;
    updated_at: Date;
    confirmed_at: Date;
    user: User;
    service: Service;
    updateTimestamps(): void;
    updateTimestamp(): void;
}
