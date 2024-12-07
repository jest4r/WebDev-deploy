import { CreatePaymentDto } from './create-payment.dto';
import { PaymentMethod } from 'src/enum/PaymentMethod.enum';
declare const UpdatePaymentDto_base: import("@nestjs/common").Type<Partial<CreatePaymentDto>>;
export declare class UpdatePaymentDto extends UpdatePaymentDto_base {
    payment_method?: PaymentMethod;
    banking_number?: string;
    user_id?: number;
}
export {};
