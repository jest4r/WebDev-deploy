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
const typeorm_2 = require("typeorm");
const tasker_entity_1 = require("./entities/tasker.entity");
let TaskersService = class TaskersService {
    constructor(taskerRepository) {
        this.taskerRepository = taskerRepository;
    }
    async create(createTaskerDto) {
        try {
            const tasker = this.taskerRepository.create(createTaskerDto);
            return await this.taskerRepository.save(tasker);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        return await this.taskerRepository.find();
    }
    async findOne(id) {
        const tasker = await this.taskerRepository.findOne({ where: { id } });
        if (!tasker) {
            throw new common_1.NotFoundException(`Tasker with ID ${id} not found`);
        }
        return tasker;
    }
    async update(id, updateTaskerDto) {
        const tasker = await this.findOne(id);
        const updatedTasker = Object.assign(tasker, updateTaskerDto);
        return await this.taskerRepository.save(updatedTasker);
    }
    async remove(id) {
        const result = await this.taskerRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Tasker with ID ${id} not found`);
        }
    }
};
exports.TaskersService = TaskersService;
exports.TaskersService = TaskersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasker_entity_1.Tasker)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskersService);
//# sourceMappingURL=taskers.service.js.map