import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillsController {
    private readonly skillsService;
    constructor(skillsService: SkillsService);
    create(createSkillDto: CreateSkillDto): Promise<import("./entities/skill.entity").Skill>;
    findAll(): Promise<import("./entities/skill.entity").Skill[]>;
    findOne(id: string): Promise<import("./entities/skill.entity").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
