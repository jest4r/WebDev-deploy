import { Repository } from 'typeorm';
import { Tasker } from './entities/tasker.entity';
import { CreateTaskerDto } from './dto/create-tasker.dto';
import { UpdateTaskerDto } from './dto/update-tasker.dto';
export declare class TaskersService {
    private taskerRepository;
    constructor(taskerRepository: Repository<Tasker>);
    create(createTaskerDto: CreateTaskerDto): Promise<Tasker>;
    findAll(): Promise<Tasker[]>;
    findOne(id: number): Promise<Tasker>;
    update(id: number, updateTaskerDto: UpdateTaskerDto): Promise<Tasker>;
    remove(id: number): Promise<void>;
}
