import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TaskersService } from 'src/taskers/taskers.service';
import { UsersService } from 'src/users/users.service';
export declare class TaskActionService {
    private taskRepository;
    private readonly usersService;
    private readonly taskersService;
    constructor(taskRepository: Repository<Task>, usersService: UsersService, taskersService: TaskersService);
    apply(tasker_id: number, user_id: number, task_id: number): Promise<Task>;
    complete(tasker_id: number, task_id: number): Promise<Task>;
    choose(user_id: number, tasker_id: number, task_id: number): Promise<Task>;
    accept(tasker_id: number, task_id: number): Promise<Task>;
    finish(user_id: number, task_id: number): Promise<Task>;
    reject(tasker_id: number, task_id: number): Promise<Task>;
    cancel(user_id: number, task_id: number): Promise<Task>;
}
