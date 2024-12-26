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
exports.TaskActionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const task_entity_1 = require("./entities/task.entity");
const typeorm_2 = require("typeorm");
const taskers_service_1 = require("../taskers/taskers.service");
const users_service_1 = require("../users/users.service");
const Status_enum_1 = require("../enum/Status.enum");
const event_emitter_1 = require("@nestjs/event-emitter");
const Notification_enum_1 = require("../enum/Notification.enum");
const notifications_service_1 = require("../notifications/notifications.service");
const email_service_1 = require("../email/email.service");
let TaskActionService = class TaskActionService {
    constructor(taskRepository, usersService, taskersService, emitter, notificationsService, emailService) {
        this.taskRepository = taskRepository;
        this.usersService = usersService;
        this.taskersService = taskersService;
        this.emitter = emitter;
        this.notificationsService = notificationsService;
        this.emailService = emailService;
    }
    async notifyTaskers(task) {
        try {
            const taskers = await this.taskersService.findAll();
            const district = task.district;
            const taskersInDistrict = taskers.filter((tasker) => tasker.work_area.includes(district));
            taskersInDistrict.forEach((tasker) => {
                if (!tasker.user) {
                    return;
                }
                if (tasker.user.id === task.user.id) {
                    return;
                }
                console.log('Send email to tasker', tasker.user);
                this.notificationsService.sendToUser({
                    user_id: tasker.user.id,
                    message: `New task in your district`,
                    type: Notification_enum_1.NotificationType.MESSAGE,
                    link: `apply/${task.id}`,
                });
                this.emailService.sendTaskEmail(task, tasker);
            });
        }
        catch (error) {
            throw error;
        }
    }
    async apply(tasker_id, user_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'user'],
            });
            if (task.user.id === user_id) {
                throw new common_1.ForbiddenException('You cannot apply for your own task');
            }
            if (task.task_status !== Status_enum_1.Status.POSTED) {
                throw new common_1.BadRequestException('Task is not available for application');
            }
            const tasker = await this.taskersService.findOne(tasker_id).catch(() => {
                throw new common_1.NotFoundException('Tasker not found is task service');
            });
            const isApplied = task.taskers.find((tasker) => tasker.id === tasker_id);
            if (isApplied) {
                throw new common_1.BadRequestException('Tasker has already applied for this task');
            }
            this.notificationsService.sendToUser({
                user_id: task.user.id,
                message: `Tasker ${tasker.id} has applied for your task`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage`,
            });
            console.log('Send email to user', task.user.email);
            this.emailService.sendApplyTaskEmail(tasker, task, task.user);
            task.taskers.push(tasker);
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async complete(tasker_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: [
                    'taskers',
                    'user',
                    'user.profile',
                    'tasker',
                    'tasker.user.profile',
                ],
            });
            const tasker = task.taskers.find((tasker) => tasker.id === tasker_id);
            if (!tasker) {
                throw new common_1.NotFoundException('Tasker not found');
            }
            task.task_status = Status_enum_1.Status.WAITING;
            this.notificationsService.sendToUser({
                user_id: task.user.id,
                message: `Tasker ${tasker.id} has completed the task`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage`,
            });
            this.emailService.sendTaskerCompleteTaskEmail(task, tasker);
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async choose(user_id, tasker_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'user', 'user.profile'],
            });
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You cannot choose tasker for this task');
            }
            if (task.task_status !== Status_enum_1.Status.POSTED) {
                throw new common_1.BadRequestException('Task is not available for application');
            }
            const tasker = task.taskers.find((tasker) => tasker.id === tasker_id);
            if (!tasker) {
                throw new common_1.BadRequestException('Tasker is not in the tasker list');
            }
            task.task_status = Status_enum_1.Status.PENDING;
            task.tasker = tasker;
            const taskerData = await this.taskersService.getAllTaskerData(tasker_id);
            this.notificationsService.sendToUser({
                user_id: tasker.id,
                message: `You have been chosen for task ${task.id}`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage/tasker`,
            });
            this.emailService.chooseTaskerEmail(taskerData, task);
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async accept(task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: [
                    'tasker',
                    'user',
                    'user.profile',
                    'tasker.user',
                    'tasker.user.profile',
                    'tasker.skills',
                ],
            });
            if (task.task_status !== Status_enum_1.Status.PAYMENT_CONFIRM) {
                throw new common_1.BadRequestException('Task is not available for payment');
            }
            task.task_status = Status_enum_1.Status.IN_PROGRESS;
            this.notificationsService.sendToUser({
                user_id: task.user.id,
                message: `Tasker ${task.tasker.id} has accepted the task`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage`,
            });
            console.log('Send email to user', task.user.email);
            this.emailService.sendTaskerAcceptForTaskerEmail(task, task.tasker.user);
            console.log('Send email to tasker', task.tasker.user.email);
            this.emailService.sendTaskerAcceptEmail(task, task.tasker);
            this.taskRepository.save(task);
            return await this.taskRepository.findOne({ where: { id: task_id } });
        }
        catch (error) {
            throw error;
        }
    }
    async pay(tasker_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: [
                    'tasker',
                    'user',
                    'user.profile',
                    'tasker.user',
                    'tasker.user.profile',
                ],
            });
            if (tasker_id != task.tasker.id) {
                throw new common_1.BadRequestException('Tasker is not chosen for this task');
            }
            if (task.task_status !== Status_enum_1.Status.PENDING) {
                throw new common_1.BadRequestException('Task is not available for payment');
            }
            task.task_status = Status_enum_1.Status.PAYMENT_CONFIRM;
            const admins = await this.usersService.findAllAdmin();
            admins.forEach((admin) => {
                this.notificationsService.sendToUser({
                    user_id: task.user.id,
                    message: `Tasker ${task.tasker.id} has accepted the task`,
                    type: Notification_enum_1.NotificationType.MESSAGE,
                    link: `admin/tasks`,
                });
            });
            this.emailService.sendAdminConfirmationEmail(task.tasker.user);
            console.log('Send email to admin');
            this.taskRepository.save(task);
            return await this.taskRepository.findOne({ where: { id: task_id } });
        }
        catch (error) {
            throw error;
        }
    }
    async finish(user_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: [
                    'taskers',
                    'user',
                    'tasker',
                    'tasker.user',
                    'tasker.user.profile',
                ],
            });
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You cannot finish this task');
            }
            if (task.task_status !== Status_enum_1.Status.WAITING) {
                throw new common_1.BadRequestException('Task is not available for finishing');
            }
            task.task_status = Status_enum_1.Status.COMPLETED;
            this.taskersService.updateCompletedTasks(task.tasker.id);
            this.notificationsService.sendToUser({
                user_id: task.tasker.id,
                message: `User has finished the task`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage/tasker`,
            });
            this.emailService.sendTaskerCompleteTaskEmail(task, task.tasker);
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async reject(tasker_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'tasker', 'user'],
            });
            if (task.task_status === Status_enum_1.Status.POSTED) {
                const tasker = task.taskers.find((tasker) => tasker.id === tasker_id);
                if (!tasker) {
                    throw new common_1.NotFoundException('Tasker not found');
                }
                task.taskers = task.taskers.filter((tasker) => tasker.id !== tasker_id);
                task.task_status = Status_enum_1.Status.POSTED;
            }
            if (task.tasker &&
                task.tasker.id === tasker_id &&
                task.task_status === Status_enum_1.Status.PENDING) {
                task.taskers = task.taskers.filter((tasker) => tasker.id !== tasker_id);
                task.task_status = Status_enum_1.Status.POSTED;
                task.tasker = null;
            }
            this.notificationsService.sendToUser({
                user_id: task.user.id,
                message: `Tasker ${tasker_id} has rejected the task`,
                type: Notification_enum_1.NotificationType.MESSAGE,
                link: `taskmanage`,
            });
            this.emailService.sendTaskerRejectionEmail(task);
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async cancel(user_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'user'],
            });
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You cannot cancel this task');
            }
            if (task.task_status !== Status_enum_1.Status.POSTED) {
                throw new common_1.BadRequestException('Task is not available for cancelling');
            }
            task.task_status = Status_enum_1.Status.CANCELLED;
            task.taskers.forEach((tasker) => {
                this.notificationsService.sendToUser({
                    user_id: tasker.id,
                    message: `User has cancelled the task`,
                    type: Notification_enum_1.NotificationType.MESSAGE,
                    link: `taskmanager/tasker`,
                });
            });
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
};
exports.TaskActionService = TaskActionService;
exports.TaskActionService = TaskActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        taskers_service_1.TaskersService,
        event_emitter_1.EventEmitter2,
        notifications_service_1.NotificationsService,
        email_service_1.default])
], TaskActionService);
//# sourceMappingURL=task-action.service.js.map