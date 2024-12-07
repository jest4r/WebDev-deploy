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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const role_guard_1 = require("../auth/guards/role.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const Role_enum_1 = require("../enum/Role.enum");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll() {
        return this.usersService.findAll();
    }
    findMe(req, id) {
        if (id === 'me') {
            return this.usersService.findById(req.user.user_id);
        }
        if (req.user.role === Role_enum_1.Role.ADMIN) {
            return this.usersService.findById(Number(id));
        }
        throw new common_1.ForbiddenException("You don't have permission to access this resource");
    }
    update(req, id, updateUserDto) {
        if (id === 'me') {
            return this.usersService.update(req.user.user_id, updateUserDto);
        }
        if (req.user.role === Role_enum_1.Role.ADMIN) {
            return this.usersService.update(Number(id), updateUserDto);
        }
        throw new common_1.ForbiddenException("You don't have permission to access this resource");
    }
    remove(req, id) {
        if (id === 'me') {
            return this.usersService.remove(req.user.user_id);
        }
        if (req.user.role === Role_enum_1.Role.ADMIN) {
            return this.usersService.remove(Number(id));
        }
        throw new common_1.ForbiddenException("You don't have permission to access this resource");
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)(Role_enum_1.Role.ADMIN),
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN: create new user' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'The user has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(role_guard_1.RoleGuard),
    (0, roles_decorator_1.Roles)(Role_enum_1.Role.ADMIN),
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN: Get all user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return all user.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'ADMIN: /:id, USER: /me to get current user',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the user by ID.',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findMe", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({
        summary: 'ADMIN: /:id, USER: /me to update current user',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the user updated by ID.',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)('JWT-auth'),
    (0, swagger_1.ApiOperation)({ summary: 'ADMIN: /:id, USER: /me delete current user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the user deleted by ID.',
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('Users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map