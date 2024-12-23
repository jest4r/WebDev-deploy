import { CreateReviewDto } from './dto/create-review.dto';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { Task } from 'src/tasks/entities/task.entity';
import { Tasker } from 'src/taskers/entities/tasker.entity';
export declare class ReviewsService {
    private taskerRepository;
    private reviewRepository;
    private taskRepository;
    constructor(taskerRepository: Repository<Tasker>, reviewRepository: Repository<Review>, taskRepository: Repository<Task>);
    create(createReviewDto: CreateReviewDto, user_id: number): Promise<Review>;
    findAll(tasker_id: number): Promise<Review[]>;
    findOne(task_id: number): Promise<Review>;
}
