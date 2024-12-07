import { TaskersService } from './taskers.service';
import { CreateTaskerDto } from './dto/create-tasker.dto';
import { UpdateTaskerDto } from './dto/update-tasker.dto';
import { Tasker } from './entities/tasker.entity';
export declare class TaskersController {
    private readonly taskersService;
    constructor(taskersService: TaskersService);
    create(createTaskerDto: CreateTaskerDto): Promise<Tasker>;
    findAll(): Promise<Tasker[]>;
    findOne(id: string): Promise<Tasker>;
    update(id: string, updateTaskerDto: UpdateTaskerDto): Promise<Tasker>;
    remove(id: string): Promise<void>;
}
