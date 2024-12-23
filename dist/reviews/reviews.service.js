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
let ReviewsService = class ReviewsService {
    constructor(reviewsRepository) {
        this.reviewsRepository = reviewsRepository;
    }
    async create(createReviewDto) {
        try {
            const review = this.reviewsRepository.create(createReviewDto);
            return await this.reviewsRepository.save(review);
        }
        catch (error) {
            console.error('Error creating Review:', error.message);
            throw new Error('Error creating Review');
        }
    }
    async findAll() {
        try {
            return await this.reviewsRepository.find();
        }
        catch (error) {
            throw new Error('Error finding Review');
        }
    }
    async findAllByTasker(tasker_id) {
        try {
            return await this.reviewsRepository.find({ where: { tasker_id } });
        }
        catch (error) {
            throw new Error('Error finding reviews for tasker');
        }
    }
    async findOne(id) {
        try {
            const review = await this.reviewsRepository.findOne({ where: { id } });
            if (!review) {
                throw new common_1.NotFoundException(`Review with ID ${id} not found`);
            }
            return review;
        }
        catch (error) {
            throw new Error('Error finding Review');
        }
    }
    async update(id, updateReviewDto, user_id) {
        try {
            const review = await this.reviewsRepository.findOne({ where: { id } });
            if (!review) {
                throw new common_1.NotFoundException(`Review with ID ${id} not found`);
            }
            if (review.user_id !== user_id) {
                throw new common_1.ForbiddenException('You are not allowed to update this review');
            }
            await this.reviewsRepository.update(id, updateReviewDto);
            const updatedReview = await this.reviewsRepository.findOne({ where: { id } });
            if (!updatedReview) {
                throw new common_1.NotFoundException(`Review with ID ${id} not found`);
            }
            return updatedReview;
        }
        catch (error) {
            throw new Error('Error updating Review');
        }
    }
    async remove(id) {
        try {
            const result = await this.reviewsRepository.delete(id);
            if (result.affected === 0) {
                throw new common_1.NotFoundException(`Review with ID ${id} not found`);
            }
        }
        catch (error) {
            throw new Error('Error deleting Review');
        }
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map