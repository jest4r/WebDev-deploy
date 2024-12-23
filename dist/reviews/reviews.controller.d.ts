import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto, req: AuthRequest): Promise<import("./entities/review.entity").Review>;
    findAll(tasker_id?: string, review_id?: string): Promise<import("./entities/review.entity").Review> | Promise<import("./entities/review.entity").Review[]>;
}
