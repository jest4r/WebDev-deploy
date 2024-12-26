import { NotificationsService } from './notifications.service';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class NotificationsController {
    private notificationsService;
    constructor(notificationsService: NotificationsService);
    test(req: AuthRequest): Promise<import("./entities/notification.entity").Notification>;
    findAll(req: AuthRequest): Promise<import("./entities/notification.entity").Notification[]>;
    markAsRead(notification_id: string, req: AuthRequest): Promise<import("./entities/notification.entity").Notification>;
    markAllAsRead(req: AuthRequest): Promise<import("./entities/notification.entity").Notification[]>;
    delete(notification_id: string, req: AuthRequest): Promise<import("./entities/notification.entity").Notification>;
    deleteAll(req: AuthRequest): Promise<import("./entities/notification.entity").Notification[]>;
}
