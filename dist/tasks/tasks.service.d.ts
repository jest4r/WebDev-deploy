import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { Task } from './entities/task.entity';
import { UsersService } from 'src/users/users.service';
import { TaskersService } from 'src/taskers/taskers.service';
import { SkillsService } from 'src/skills/skills.service';
export declare class TasksService {
    private taskRepository;
    private readonly usersService;
    private readonly taskersService;
    private readonly skillService;
    constructor(taskRepository: Repository<Task>, usersService: UsersService, taskersService: TaskersService, skillService: SkillsService);
    create(user_id: number, createTaskDto: CreateTaskDto): Promise<Task>;
    findAllForAdmin(): Promise<Task[]>;
    findAllForUser(): Promise<Task[]>;
    findUserTasks(user_id: number): Promise<Task[]>;
    findTaskerTasks(tasker_id: number): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(user_id: number, id: number): Promise<Task>;
}
