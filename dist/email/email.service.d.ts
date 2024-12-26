import * as Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
import { Task } from 'src/tasks/entities/task.entity';
export default class EmailService {
    private readonly configService;
    private nodemailerTransport;
    constructor(configService: ConfigService);
    sendMail(options: Mail.Options): Promise<any>;
    sendWelcomeEmail(email: string): Promise<any>;
    sendOTP(email: string, otp: string): Promise<any>;
    sendAdminConfirmationEmail(user: User): Promise<any>;
    sendApplyTaskEmail(tasker: Tasker, task: Task, user: User): Promise<any>;
    chooseTaskerEmail(tasker: Tasker, task: Task): Promise<any>;
    sendTaskEmail(task: Task, tasker: Tasker): Promise<any>;
    sendTaskerRejectionEmail(task: Task): Promise<any>;
    sendTaskerAcceptEmail(task: Task, tasker: Tasker): Promise<any>;
    sendTaskerAcceptForTaskerEmail(task: Task, user: User): Promise<any>;
    sendTaskerCompleteTaskEmail(task: Task, tasker: Tasker): Promise<any>;
    sendUserConfirmCompleted(user: User, task: Task, tasker: Tasker): Promise<any>;
    sendUserTaskerReviewTask(user: User, task: Task, tasker: Tasker): Promise<any>;
}
