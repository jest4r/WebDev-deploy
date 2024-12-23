import { Repository } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UsersService } from 'src/users/users.service';
import { Notification } from './entities/notification.entity';
import { NotificationsGateway } from './notifications.gateway';
export declare class NotificationsService {
    private notificationsGateway;
    private notificationRepository;
    private readonly usersService;
    constructor(notificationsGateway: NotificationsGateway, notificationRepository: Repository<Notification>, usersService: UsersService);
    test(user_id: number): Promise<Notification>;
    sendToUser(notificationDto: CreateNotificationDto): Promise<Notification>;
    findAll(userId: number): Promise<Notification[]>;
    markAsRead(id: number, userId: number): Promise<Notification>;
    markAllAsRead(userId: number): Promise<Notification[]>;
    remove(id: number, userId: number): Promise<Notification>;
    removeAll(userId: number): Promise<Notification[]>;
    removeAllNotifications(): Promise<void>;
}
