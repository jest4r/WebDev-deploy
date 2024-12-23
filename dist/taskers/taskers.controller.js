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
const tasker_entity_1 = require("./entities/tasker.entity");
let TaskersController = class TaskersController {
    constructor(taskersService) {
        this.taskersService = taskersService;
    }
    create(createTaskerDto) {
        return this.taskersService.create(createTaskerDto);
    }
    findAll() {
        return this.taskersService.findAll();
    }
    findOne(id) {
        return this.taskersService.findOne(+id);
    }
    update(id, updateTaskerDto) {
        return this.taskersService.update(+id, updateTaskerDto);
    }
    remove(id) {
        return this.taskersService.remove(+id);
    }
};
exports.TaskersController = TaskersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new tasker' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.CREATED, description: 'The tasker has been successfully created.', type: tasker_entity_1.Tasker }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.BAD_REQUEST, description: 'Invalid input.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tasker_dto_1.CreateTaskerDto]),
    __metadata("design:returntype", Promise)
], TaskersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all taskers' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Return all taskers.', type: [tasker_entity_1.Tasker] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a tasker by ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'Return the tasker.', type: tasker_entity_1.Tasker }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Tasker not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a tasker by ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.OK, description: 'The tasker has been successfully updated.', type: tasker_entity_1.Tasker }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Tasker not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tasker_dto_1.UpdateTaskerDto]),
    __metadata("design:returntype", Promise)
], TaskersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a tasker by ID' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NO_CONTENT, description: 'The tasker has been successfully deleted.' }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.NOT_FOUND, description: 'Tasker not found.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskersController.prototype, "remove", null);
exports.TaskersController = TaskersController = __decorate([
    (0, common_1.Controller)('taskers'),
    (0, swagger_1.ApiTags)('Taskers'),
    __metadata("design:paramtypes", [taskers_service_1.TaskersService])
], TaskersController);
//# sourceMappingURL=taskers.controller.js.map