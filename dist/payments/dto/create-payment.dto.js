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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const PaymentMethod_enum_1 = require("../../enum/PaymentMethod.enum");
class CreatePaymentDto {
}
exports.CreatePaymentDto = CreatePaymentDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1234456789',
        description: 'The banking number of User',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "banking_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: PaymentMethod_enum_1.PaymentMethod.PAYPAL,
        description: 'The payment method',
        enum: PaymentMethod_enum_1.PaymentMethod,
    }),
    (0, class_validator_1.IsEnum)(PaymentMethod_enum_1.PaymentMethod, {
        message: 'Payment method must be one of: paypal, credit card, cash, online banking',
    }),
    __metadata("design:type", String)
], CreatePaymentDto.prototype, "payment_method", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'The user ID associated with the payment',
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentDto.prototype, "user_id", void 0);
//# sourceMappingURL=create-payment.dto.js.map