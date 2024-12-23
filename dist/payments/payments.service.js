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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const payment_entity_1 = require("./entities/payment.entity");
let PaymentsService = class PaymentsService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }
    async create(createPaymentDto) {
        const { banking_number, payment_method, user_id } = createPaymentDto;
        try {
            const payment = this.paymentRepository.create({
                banking_number,
                payment_method,
                user_id,
            });
            await this.paymentRepository.save(payment);
            return payment;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.paymentRepository.find();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const payment = await this.paymentRepository.findOne({ where: { id } });
            if (!payment) {
                throw new common_1.NotFoundException(`Payment with id ${id} not found`);
            }
            return payment;
        }
        catch (error) {
            throw error;
        }
    }
    async findByUserId(user_ID) {
        try {
            const payments = await this.paymentRepository.find({
                where: { user_id: user_ID },
            });
            if (payments.length === 0) {
                throw new common_1.NotFoundException(`No payments found for user with id ${user_ID}`);
            }
            return payments;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updatePaymentDto) {
        try {
            const payment = await this.paymentRepository.findOne({ where: { id } });
            if (!payment) {
                throw new common_1.NotFoundException(`Payment with id ${id} not found`);
            }
            Object.assign(payment, updatePaymentDto);
            return await this.paymentRepository.save(payment);
        }
        catch (error) {
            throw new Error(`Error updating payment: ${error.message}`);
        }
    }
    async remove(id) {
        try {
            const payment = await this.paymentRepository.findOne({ where: { id } });
            if (!payment) {
                throw new common_1.NotFoundException(`Payment with id ${id} not found`);
            }
            await this.paymentRepository.remove(payment);
            return { message: `Payment with id ${id} has been successfully deleted` };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(`Error deleting payment: ${error.message}`);
        }
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(payment_entity_1.Payment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map