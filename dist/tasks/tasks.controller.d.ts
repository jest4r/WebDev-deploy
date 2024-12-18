import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
import { TaskActionService } from './task-action.service';
export declare class TasksController {
    private readonly tasksService;
    private readonly taskActionService;
    constructor(tasksService: TasksService, taskActionService: TaskActionService);
    create(req: AuthRequest, createTaskDto: CreateTaskDto): Promise<import("./entities/task.entity").Task>;
    findAllForAdmin(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task> | Promise<import("./entities/task.entity").Task[]>;
    findUserTasks(req: AuthRequest): Promise<import("./entities/task.entity").Task[]>;
    findTaskerTasks(req: AuthRequest): Promise<import("./entities/task.entity").Task[]>;
    apply(req: AuthRequest, id: string): Promise<import("./entities/task.entity").Task>;
    choose(req: AuthRequest, task_id: string, tasker_id: string): Promise<import("./entities/task.entity").Task>;
    accept(req: AuthRequest, id: string): Promise<import("./entities/task.entity").Task>;
    complete(req: AuthRequest, id: string): Promise<import("./entities/task.entity").Task>;
    finish(req: AuthRequest, task_id: string): Promise<import("./entities/task.entity").Task>;
    reject(req: AuthRequest, id: string): Promise<import("./entities/task.entity").Task>;
    cancel(req: AuthRequest, task_id: string): Promise<import("./entities/task.entity").Task>;
    remove(id: string, req: AuthRequest): Promise<import("./entities/task.entity").Task>;
}
