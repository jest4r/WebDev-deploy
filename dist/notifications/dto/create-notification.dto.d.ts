import { NotificationType } from 'src/enum/Notification.enum';
export declare class CreateNotificationDto {
    user_id: number;
    message: string;
    type: NotificationType;
    link: string;
}
