import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './entities/skill.entity';
import { Repository } from 'typeorm';
export declare class SkillsService {
    private skillRepository;
    constructor(skillRepository: Repository<Skill>);
    create(createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findOne(id: number): Promise<Skill>;
    findByIds(ids: number[]): Promise<Skill[]>;
    update(id: number, updateSkillDto: UpdateSkillDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
