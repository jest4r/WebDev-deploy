import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(req: AuthRequest, createPaymentDto: CreatePaymentDto): Promise<import("./entities/payment.entity").Payment>;
    findAll(): Promise<import("./entities/payment.entity").Payment[]>;
    findOne(id: string): Promise<import("./entities/payment.entity").Payment>;
    findByUserID(req: AuthRequest, user_id: string): Promise<import("./entities/payment.entity").Payment[]>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
