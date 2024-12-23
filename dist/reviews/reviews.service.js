"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entities/review.entity");
const task_entity_1 = require("../tasks/entities/task.entity");
const Status_enum_1 = require("../enum/Status.enum");
const tasker_entity_1 = require("../taskers/entities/tasker.entity");
let ReviewsService = class ReviewsService {
    constructor(taskerRepository, reviewRepository, taskRepository) {
        this.taskerRepository = taskerRepository;
        this.reviewRepository = reviewRepository;
        this.taskRepository = taskRepository;
    }
    async create(createReviewDto, user_id) {
        try {
            const { task_id } = createReviewDto;
            const task = await this.taskRepository.findOne({
                where: { id: task_id },
                relations: ['user', 'tasker', 'review'],
            });
            if (task.review) {
                throw new common_1.ConflictException('You have already reviewed this task');
            }
            if (task.task_status !== Status_enum_1.Status.COMPLETED) {
                throw new common_1.ForbiddenException('You are not allowed to review this task');
            }
            if (task.user.id !== user_id) {
                throw new common_1.ForbiddenException('You are not allowed to review this task');
            }
            if (!task) {
                throw new common_1.NotFoundException('Task not found');
            }
            const review = this.reviewRepository.create(createReviewDto);
            review.task = task;
            const res = await this.reviewRepository.save(review);
            const tasker = await this.taskerRepository.findOne({
                where: { id: task.tasker.id },
            });
            tasker.rating_sum += createReviewDto.rating;
            tasker.rating_count += 1;
            await this.taskerRepository.save(tasker);
            return res;
        }
        catch (error) {
            throw error;
        }
    }
    findAll(tasker_id) {
        const reviews = this.reviewRepository.find({
            where: { task: { tasker: { id: tasker_id } } },
            relations: ['task', 'task.skill'],
        });
        return reviews;
    }
    findOne(task_id) {
        const review = this.reviewRepository.findOne({
            where: { task: { id: task_id } },
            relations: ['task', 'task.skill'],
        });
        return review;
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tasker_entity_1.Tasker)),
    __param(1, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __param(2, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map