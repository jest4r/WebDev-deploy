"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
const notification_entity_1 = require("./entities/notification.entity");
const notifications_gateway_1 = require("./notifications.gateway");
const Notification_enum_1 = require("../enum/Notification.enum");
let NotificationsService = class NotificationsService {
    constructor(notificationsGateway, notificationRepository, usersService) {
        this.notificationsGateway = notificationsGateway;
        this.notificationRepository = notificationRepository;
        this.usersService = usersService;
    }
    async test(user_id) {
        const user = await this.usersService.findById(user_id);
        const notification = this.notificationRepository.create({
            id: user.id,
            message: 'Test notification',
            link: 'https://example.com',
            isRead: false,
            type: Notification_enum_1.NotificationType.MESSAGE,
            user: user,
        });
        this.notificationsGateway.emitNotification(user.id, notification);
        return notification;
    }
    async sendToUser(notificationDto) {
        const newNotification = this.notificationRepository.create(notificationDto);
        const notification = await this.notificationRepository.save(newNotification);
        this.notificationsGateway.emitNotification(notificationDto.user_id, notification);
        return newNotification;
    }
    async findAll(userId) {
        return this.notificationRepository.find({
            where: { user_id: userId },
            order: { createdAt: 'DESC' },
        });
    }
    async markAsRead(id, userId) {
        const notification = await this.notificationRepository.findOne({
            where: { id },
        });
        if (notification.user_id !== userId) {
            throw new Error('You do not have permission to access this notification');
        }
        notification.isRead = true;
        return await this.notificationRepository.save(notification);
    }
    async markAllAsRead(userId) {
        const notifications = await this.notificationRepository.find({
            where: { user_id: userId },
        });
        notifications.forEach((notification) => {
            notification.isRead = true;
        });
        return await this.notificationRepository.save(notifications);
    }
    async remove(id, userId) {
        const notification = await this.notificationRepository.findOne({
            where: { id },
        });
        if (notification.user_id !== userId) {
            throw new Error('You do not have permission to access this notification');
        }
        return await this.notificationRepository.remove(notification);
    }
    async removeAll(userId) {
        const notifications = await this.notificationRepository.find({
            where: { user_id: userId },
        });
        return await this.notificationRepository.remove(notifications);
    }
    async removeAllNotifications() {
        return await this.notificationRepository.clear();
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(notification_entity_1.Notification)),
    __metadata("design:paramtypes", [notifications_gateway_1.NotificationsGateway,
        typeorm_2.Repository,
        users_service_1.UsersService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map