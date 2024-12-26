import { NotificationType } from 'src/enum/Notification.enum';
import { User } from 'src/users/entities/user.entity';
export declare class Notification {
    id: number;
    message: string;
    link: string;
    isRead: boolean;
    type: NotificationType;
    user_id: number;
    user: User;
    createdAt: Date;
    updateDates(): void;
}
