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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const minimum_age_validator_1 = require("../../decorator/minimum-age.validator");
const Gender_enum_1 = require("../../enum/Gender.enum");
const Role_enum_1 = require("../../enum/Role.enum");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John', description: 'The name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Doe', description: 'The last name of the user' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    __metadata("design:type", String)
], CreateUserDto.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'JohnDoe@gmail.com',
        description: 'The email of the user',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Số điện thoại Việt Nam',
        example: '0123456789',
        minLength: 10,
        maxLength: 10,
    }),
    (0, class_validator_1.IsNumberString)({}, { message: 'Số điện thoại chỉ được chứa các chữ số' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Số điện thoại là bắt buộc' }),
    (0, class_validator_1.Length)(10, 10, { message: 'Số điện thoại phải có đúng 10 chữ số' }),
    (0, class_validator_1.IsPhoneNumber)('VN', { message: 'Phải là số điện thoại hợp lệ của Việt Nam' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Mật khẩu với các yêu cầu cụ thể',
        example: 'StrongP@ssw0rd!',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Mật khẩu là bắt buộc' }),
    (0, class_validator_1.MinLength)(8, { message: 'Mật khẩu phải có ít nhất 8 ký tự' }),
    (0, class_validator_1.MaxLength)(200, { message: 'Mật khẩu không được vượt quá 200 ký tự' }),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Gender_enum_1.Gender.MALE }),
    (0, class_validator_1.IsEnum)(Gender_enum_1.Gender),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1999-12-31' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDateString)(),
    (0, minimum_age_validator_1.MinimumAge)(18),
    __metadata("design:type", String)
], CreateUserDto.prototype, "date_of_birth", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: Role_enum_1.Role.USER, enum: Role_enum_1.Role }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(Role_enum_1.Role),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
//# sourceMappingURL=create-user.dto.js.map