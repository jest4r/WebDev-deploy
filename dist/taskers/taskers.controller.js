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
exports.TaskersController = void 0;
const common_1 = require("@nestjs/common");
const taskers_service_1 = require("./taskers.service");
const create_tasker_dto_1 = require("./dto/create-tasker.dto");
const update_tasker_dto_1 = require("./dto/update-tasker.dto");
const swagger_1 = require("@nestjs/swagger");
const role_guard_decorator_1 = require("../auth/decorator/role-guard.decorator");
const Role_enum_1 = require("../enum/Role.enum");
let TaskersController = class TaskersController {
    constructor(taskersService) {
        this.taskersService = taskersService;
    }
    create(req, createTaskerDto) {
        const user_id = req.user.user_id;
        return this.taskersService.create(user_id, createTaskerDto);
    }
    findAll() {
        return this.taskersService.findAll();
    }
    findOne(req, id) {
        if (id === 'me') {
            return this.taskersService.findOne(req.user.tasker_id);
        }
        if (req.user.role === Role_enum_1.Role.ADMIN) {
            return this.taskersService.findOne(+id);
        }
        throw new common_1.ForbiddenException('Insufficient permissions');
    }
    update(req, updateTaskerDto) {
        return this.taskersService.update(req.user.tasker_id, updateTaskerDto);
    }
    remove(id) {
        return this.taskersService.remove(+id);
    }
};
exports.TaskersController = TaskersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_tasker_dto_1.CreateTaskerDto]),
    __metadata("design:returntype", void 0)
], TaskersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, role_guard_decorator_1.RolesGuard)([Role_enum_1.Role.ADMIN]),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', required: true }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], TaskersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_tasker_dto_1.UpdateTaskerDto]),
    __metadata("design:returntype", void 0)
], TaskersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskersController.prototype, "remove", null);
exports.TaskersController = TaskersController = __decorate([
    (0, common_1.Controller)('taskers'),
    __metadata("design:paramtypes", [taskers_service_1.TaskersService])
], TaskersController);
//# sourceMappingURL=taskers.controller.js.map