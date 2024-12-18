import { TaskersService } from './taskers.service';
import { CreateTaskerDto } from './dto/create-tasker.dto';
import { UpdateTaskerDto } from './dto/update-tasker.dto';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class TaskersController {
    private readonly taskersService;
    constructor(taskersService: TaskersService);
    create(req: AuthRequest, createTaskerDto: CreateTaskerDto): Promise<import("./entities/tasker.entity").Tasker>;
    findAll(): Promise<import("./entities/tasker.entity").Tasker[]>;
    findOne(req: AuthRequest, id: string): Promise<import("./entities/tasker.entity").Tasker>;
    update(req: AuthRequest, updateTaskerDto: UpdateTaskerDto): Promise<{
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
    } & import("./entities/tasker.entity").Tasker>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
