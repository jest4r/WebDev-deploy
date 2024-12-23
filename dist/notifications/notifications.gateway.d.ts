import { Server } from 'socket.io';
import { Notification } from './entities/notification.entity';
export declare class NotificationsGateway {
    server: Server;
    emitNotification(userId: number, notification: Notification): void;
}
