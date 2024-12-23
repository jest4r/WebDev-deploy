import { PaymentMethod } from "src/enum/PaymentMethod.enum";
import { User } from "src/users/entities/user.entity";
export declare class Payment {
    id: number;
    banking_number: string;
    payment_method: PaymentMethod;
    created_at: Date;
    updated_at: Date;
    updateTimestamps(): void;
    updateTimestamp(): void;
    user_id: number;
    user: User;
}
