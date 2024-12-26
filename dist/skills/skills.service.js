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
exports.SkillsService = void 0;
const common_1 = require("@nestjs/common");
const skill_entity_1 = require("./entities/skill.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let SkillsService = class SkillsService {
    constructor(skillRepository) {
        this.skillRepository = skillRepository;
    }
    async create(createSkillDto) {
        try {
            const { name } = createSkillDto;
            const skill = await this.skillRepository.findOne({ where: { name } });
            if (skill) {
                throw new common_1.ConflictException('Skill already exists');
            }
            this.skillRepository.create(createSkillDto);
            return await this.skillRepository.save(createSkillDto);
        }
        catch (error) {
            throw error;
        }
    }
    findAll() {
        return this.skillRepository.find();
    }
    findOne(id) {
        const skill = this.skillRepository.findOne({ where: { id } });
        if (!skill) {
            throw new common_1.NotFoundException('Skill not found');
        }
        return skill;
    }
    async findByIds(ids) {
        if (!ids && ids.length === 0) {
            throw new common_1.ConflictException('No skill ids provided');
        }
        const skills = await this.skillRepository.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!skills) {
            throw new common_1.NotFoundException('Skills not found');
        }
        return skills;
    }
    async update(id, updateSkillDto) {
        try {
            const skill = this.skillRepository.findOne({ where: { id } });
            if (!skill) {
                throw new common_1.NotFoundException('Skill not found');
            }
            return await this.skillRepository.update(id, updateSkillDto);
        }
        catch (error) {
            throw new Error(error);
        }
    }
    remove(id) {
        try {
            const skill = this.skillRepository.findOne({ where: { id } });
            if (!skill) {
                throw new common_1.NotFoundException('Skill not found');
            }
            return this.skillRepository.delete(id);
        }
        catch (error) {
            throw new Error(error);
        }
    }
};
exports.SkillsService = SkillsService;
exports.SkillsService = SkillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(skill_entity_1.Skill)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillsService);
//# sourceMappingURL=skills.service.js.map