import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './entities/task.entity';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, req: AuthRequest): Promise<Task>;
    findAll(): Promise<Task[]>;
    findOne(id: string): Promise<Task>;
    findAllByUserId(user_id: string): Promise<Task[]>;
    remove(id: string, req: AuthRequest): Promise<void>;
}
