import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { TaskersService } from 'src/taskers/taskers.service';
import { UsersService } from 'src/users/users.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { NotificationsService } from 'src/notifications/notifications.service';
import EmailService from 'src/email/email.service';
export declare class TaskActionService {
    private taskRepository;
    private readonly usersService;
    private readonly taskersService;
    private readonly emitter;
    private readonly notificationsService;
    private readonly emailService;
    constructor(taskRepository: Repository<Task>, usersService: UsersService, taskersService: TaskersService, emitter: EventEmitter2, notificationsService: NotificationsService, emailService: EmailService);
    notifyTaskers(task: Task): Promise<void>;
    apply(tasker_id: number, user_id: number, task_id: number): Promise<Task>;
    complete(tasker_id: number, task_id: number): Promise<Task>;
    choose(user_id: number, tasker_id: number, task_id: number): Promise<Task>;
    accept(task_id: number): Promise<Task>;
    pay(tasker_id: number, task_id: number): Promise<Task>;
    finish(user_id: number, task_id: number): Promise<Task>;
    reject(tasker_id: number, task_id: number): Promise<Task>;
    cancel(user_id: number, task_id: number): Promise<Task>;
}
