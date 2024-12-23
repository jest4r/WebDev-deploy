import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Repository } from 'typeorm';
import { Payment } from './entities/payment.entity';
export declare class PaymentsService {
    private paymentRepository;
    constructor(paymentRepository: Repository<Payment>);
    create(createPaymentDto: CreatePaymentDto): Promise<Payment>;
    findAll(): Promise<Payment[]>;
    findOne(id: number): Promise<Payment>;
    findByUserId(user_ID: number): Promise<Payment[]>;
    update(id: number, updatePaymentDto: UpdatePaymentDto): Promise<Payment>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
