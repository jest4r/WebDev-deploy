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
let TaskActionService = class TaskActionService {
    constructor(taskRepository, usersService, taskersService) {
        this.taskRepository = taskRepository;
        this.usersService = usersService;
        this.taskersService = taskersService;
    }
    async apply(tasker_id, user_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'user'],
            });
            console.log(task);
            if (task.user.id === user_id) {
                throw new common_1.ForbiddenException('You cannot apply for your own task');
            }
            if (task.task_status !== Status_enum_1.Status.POSTED) {
                throw new common_1.BadRequestException('Task is not available for application');
            }
            const tasker = await this.taskersService.findOne(tasker_id).catch(() => {
                throw new common_1.NotFoundException('Tasker not found is task service');
            });
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
                relations: ['taskers'],
            });
            const tasker = task.taskers.find((tasker) => tasker.id === tasker_id);
            if (!tasker) {
                throw new common_1.NotFoundException('Tasker not found');
            }
            task.task_status = Status_enum_1.Status.WAITING;
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
                relations: ['taskers', 'user'],
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
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async accept(tasker_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['tasker'],
            });
            if (tasker_id != task.tasker.id) {
                throw new common_1.BadRequestException('Tasker is not chosen for this task');
            }
            task.task_status = Status_enum_1.Status.IN_PROGRESS;
            return this.taskRepository.save(task);
        }
        catch (error) {
            throw error;
        }
    }
    async finish(user_id, task_id) {
        try {
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['taskers', 'user'],
            });
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You cannot finish this task');
            }
            if (task.task_status !== Status_enum_1.Status.WAITING) {
                throw new common_1.BadRequestException('Task is not available for finishing');
            }
            task.task_status = Status_enum_1.Status.COMPLETED;
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
                relations: ['taskers', 'tasker'],
            });
            const tasker = task.taskers.find((tasker) => tasker.id === tasker_id);
            if (!tasker) {
                throw new common_1.NotFoundException('Tasker not found');
            }
            task.taskers = task.taskers.filter((tasker) => tasker.id !== tasker_id);
            if (task.tasker.id === tasker_id && task.task_status === Status_enum_1.Status.PENDING) {
                task.tasker = null;
            }
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
        taskers_service_1.TaskersService])
], TaskActionService);
//# sourceMappingURL=task-action.service.js.map