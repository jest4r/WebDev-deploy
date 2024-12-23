import { PaymentMethod } from 'src/enum/PaymentMethod.enum';
export declare class CreatePaymentDto {
    banking_number: string;
    payment_method: PaymentMethod;
    user_id: number;
}
