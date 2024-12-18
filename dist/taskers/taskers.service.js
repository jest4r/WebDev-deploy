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
exports.TaskersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const tasker_entity_1 = require("./entities/tasker.entity");
const typeorm_2 = require("typeorm");
const skills_service_1 = require("../skills/skills.service");
const users_service_1 = require("../users/users.service");
let TaskersService = class TaskersService {
    constructor(taskerRepository, skillsService, usersService) {
        this.taskerRepository = taskerRepository;
        this.skillsService = skillsService;
        this.usersService = usersService;
    }
    convertArrayToString(numbers) {
        return numbers.join(', ');
    }
    async create(user_id, createTaskerDto) {
        try {
            const { skillIds, work_area, experience, ...rest } = createTaskerDto;
            const work_area_code = this.convertArrayToString(work_area);
            const skills = await this.skillsService.findByIds(skillIds);
            const user = await this.usersService.findById(user_id);
            if (user.tasker) {
                throw new common_1.ConflictException('User is already a tasker');
            }
            const tasker = this.taskerRepository.create({
                ...createTaskerDto,
                work_area: work_area_code,
                user,
                skills,
            });
            return this.taskerRepository.save(tasker);
        }
        catch (error) {
            throw error;
        }
    }
    findAll() {
        return this.taskerRepository.find({
            relations: ['skills'],
        });
    }
    findOne(id) {
        try {
            const tasker = this.taskerRepository.findOne({
                where: { id },
                relations: ['skills'],
            });
            if (!tasker) {
                throw new common_1.NotFoundException('Tasker not found');
            }
            return tasker;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateTaskerDto) {
        const { skillIds, work_area, ...rest } = updateTaskerDto;
        const work_area_code = this.convertArrayToString(work_area);
        const tasker = await this.taskerRepository.findOne({
            where: { id },
            relations: ['skills'],
        });
        if (!tasker) {
            throw new common_1.NotFoundException('Tasker not found');
        }
        if (skillIds && skillIds.length > 0) {
            const skills = await this.skillsService.findByIds(skillIds);
            tasker.skills = skills;
        }
        return this.taskerRepository.save({
            ...tasker,
            work_area: work_area_code,
            ...rest,
        });
    }
    remove(id) {
        return this.taskerRepository.delete({ id });
    }
};
exports.TaskersService = TaskersService;
exports.TaskersService = TaskersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasker_entity_1.Tasker)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        skills_service_1.SkillsService,
        users_service_1.UsersService])
], TaskersService);
//# sourceMappingURL=taskers.service.js.map