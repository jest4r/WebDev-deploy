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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
const users_service_1 = require("../users/users.service");
const console_1 = require("console");
const taskers_service_1 = require("../taskers/taskers.service");
const Status_enum_1 = require("../enum/Status.enum");
const skills_service_1 = require("../skills/skills.service");
let TasksService = class TasksService {
    constructor(taskRepository, usersService, taskersService, skillService) {
        this.taskRepository = taskRepository;
        this.usersService = usersService;
        this.taskersService = taskersService;
        this.skillService = skillService;
    }
    async create(user_id, createTaskDto) {
        const user = await this.usersService.findById(user_id);
        const skill = await this.skillService.findOne(createTaskDto.skill_id);
        const task = this.taskRepository.create({
            ...createTaskDto,
            user,
            skill,
        });
        return await this.taskRepository.save(task);
    }
    findAllForAdmin() {
        return this.taskRepository.find({
            relations: ['skill'],
        });
    }
    findAllForUser() {
        return this.taskRepository.find({
            where: { task_status: Status_enum_1.Status.POSTED },
            relations: ['skill'],
        });
    }
    async findUserTasks(user_id) {
        const user = await this.usersService.findById(user_id).catch(() => {
            throw new common_1.NotFoundException('User not found');
        });
        return this.taskRepository.find({
            where: { user: { id: user.id } },
            relations: [
                'tasker',
                'skill',
                'taskers',
                'taskers.skills',
                'tasker.skills',
            ],
        });
    }
    async findTaskerTasks(tasker_id) {
        const tasker = await this.taskersService.findOne(tasker_id);
        return this.taskRepository.find({
            where: { tasker: { id: tasker.id } },
            relations: ['user', 'skill'],
        });
    }
    findOne(id) {
        const task = this.taskRepository.findOne({ where: { id } });
        if (!task) {
            throw console_1.error;
        }
        return task;
    }
    update(id, updateTaskDto) {
        const { title, description, district, ward, detail_address, estimated_duration, fee_per_hour, } = updateTaskDto;
        return this.taskRepository.update(id, {
            title,
            description,
            district,
            ward,
            detail_address,
            estimated_duration,
            fee_per_hour,
        });
    }
    async remove(user_id, id) {
        try {
            if (!user_id) {
                throw new common_1.ForbiddenException('You must be a user to delete a task');
            }
            const task = await this.taskRepository.findOne({
                where: { id },
                relations: ['user'],
            });
            if (!task) {
                throw new common_1.NotFoundException('Task not found');
            }
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You can only delete your own tasks');
            }
            task.task_status = Status_enum_1.Status.CANCELLED;
            return this.taskRepository.save(task);
        }
        catch (e) {
            throw e;
        }
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        taskers_service_1.TaskersService,
        skills_service_1.SkillsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map