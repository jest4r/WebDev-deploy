import { Gender } from 'src/enum/Gender.enum';
import { Role } from 'src/enum/Role.enum';
import { Payment } from 'src/payments/entities/payment.entity';
import { Task } from 'src/tasks/entities/task.entity';
export declare class User {
    id: number;
    fullname: string;
    email: string;
    phone_number: string;
    password: string;
    gender: Gender;
    date_of_birth: string;
    description: string;
    role: Role;
    created_at: Date;
    updated_at: Date;
    tasks: Task[];
    updateTimestamps(): void;
    updateTimestamp(): void;
    payments: Payment[];
}
