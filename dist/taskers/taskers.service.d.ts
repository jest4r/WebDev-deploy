import { CreateTaskerDto } from './dto/create-tasker.dto';
import { UpdateTaskerDto } from './dto/update-tasker.dto';
import { Tasker } from './entities/tasker.entity';
import { Repository } from 'typeorm';
import { SkillsService } from 'src/skills/skills.service';
import { UsersService } from 'src/users/users.service';
export declare class TaskersService {
    private taskerRepository;
    private readonly skillsService;
    private readonly usersService;
    constructor(taskerRepository: Repository<Tasker>, skillsService: SkillsService, usersService: UsersService);
    convertArrayToString(numbers: number[]): string;
    create(user_id: number, createTaskerDto: CreateTaskerDto): Promise<Tasker>;
    findAll(): Promise<Tasker[]>;
    findOne(id: number): Promise<Tasker>;
    update(id: number, updateTaskerDto: UpdateTaskerDto): Promise<{
        experience: string;
        work_area: string;
        id: number;
        completed_tasks: number;
        avg_rating: number;
        rating_count: number;
        user: import("../users/entities/user.entity").User;
        skills: import("../skills/entities/skill.entity").Skill[];
        applied_tasks: import("../tasks/entities/task.entity").Task[];
        tasks: import("../tasks/entities/task.entity").Task[];
        created_at: Date;
        updated_at: Date;
    } & Tasker>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
