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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("../auth/decorator/public.decorator");
const task_action_service_1 = require("./task-action.service");
const role_guard_decorator_1 = require("../auth/decorator/role-guard.decorator");
const Role_enum_1 = require("../enum/Role.enum");
let TasksController = class TasksController {
    constructor(tasksService, taskActionService) {
        this.tasksService = tasksService;
        this.taskActionService = taskActionService;
    }
    create(req, createTaskDto) {
        return this.tasksService.create(req.user.user_id, createTaskDto);
    }
    findAllForAdmin() {
        return this.tasksService.findAllForAdmin();
    }
    findOne(id) {
        if (!id || isNaN(Number(id))) {
            return this.tasksService.findAllForUser();
        }
        return this.tasksService.findOne(+id);
    }
    findUserTasks(req) {
        return this.tasksService.findUserTasks(req.user.user_id);
    }
    findTaskerTasks(req) {
        if (!req.user.tasker_id) {
            throw new common_1.ForbiddenException('You must be a tasker to view tasks');
        }
        return this.tasksService.findTaskerTasks(req.user.tasker_id);
    }
    apply(req, id) {
        if (!req.user.tasker_id) {
            throw new common_1.ForbiddenException('You must be a tasker to apply for a task');
        }
        return this.taskActionService.apply(req.user.tasker_id, req.user.user_id, +id);
    }
    choose(req, task_id, tasker_id) {
        return this.taskActionService.choose(req.user.user_id, +tasker_id, +task_id);
    }
    accept(req, id) {
        if (!req.user.tasker_id) {
            throw new common_1.ForbiddenException('You must be a tasker to accept a task');
        }
        return this.taskActionService.accept(req.user.tasker_id, +id);
    }
    complete(req, id) {
        if (!req.user.tasker_id) {
            throw new common_1.ForbiddenException('You must be a tasker to complete a task');
        }
        return this.taskActionService.complete(req.user.tasker_id, +id);
    }
    finish(req, task_id) {
        return this.taskActionService.finish(req.user.user_id, +task_id);
    }
    reject(req, id) {
        if (!req.user.tasker_id) {
            throw new common_1.ForbiddenException('You must be a tasker to reject a task');
        }
        return this.taskActionService.reject(req.user.tasker_id, +id);
    }
    cancel(req, task_id) {
        return this.taskActionService.cancel(req.user.user_id, +task_id);
    }
    remove(id, req) {
        return this.tasksService.remove(req.user.user_id, +id);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User create a task' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN: Get all tasks' }),
    (0, role_guard_decorator_1.RolesGuard)([Role_enum_1.Role.ADMIN]),
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findAllForAdmin", null);
__decorate([
    (0, swagger_1.ApiQuery)({ name: 'id', required: false }),
    (0, swagger_1.ApiOperation)({ summary: 'Get a task by id' }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks created by user' }),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findUserTasks", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all tasks assigned to tasker' }),
    (0, common_1.Get)('tasker'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findTaskerTasks", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Tasker apply for a task' }),
    (0, common_1.Patch)(':id/apply'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "apply", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User choose a tasker for a task' }),
    (0, common_1.Patch)(':task_id/choose/:tasker_id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('task_id')),
    __param(2, (0, common_1.Param)('tasker_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "choose", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Tasker accept a task' }),
    (0, common_1.Patch)(':id/accept'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "accept", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Tasker complete a task' }),
    (0, common_1.Patch)(':id/complete'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "complete", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User rate a tasker' }),
    (0, common_1.Patch)(':id/finish'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "finish", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'Tasker reject a task' }),
    (0, common_1.Patch)(':id/reject'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "reject", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User rate a tasker' }),
    (0, common_1.Patch)(':id/cancel'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "cancel", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'User cancel a task' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "remove", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)('tasks'),
    (0, swagger_1.ApiTags)('Tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService,
        task_action_service_1.TaskActionService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map