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
exports.CreateTaskerDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTaskerDto {
}
exports.CreateTaskerDto = CreateTaskerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The id of the tasker' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTaskerDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The user id of the tasker' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTaskerDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The skill id of the tasker' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateTaskerDto.prototype, "skill_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Ha Noi', description: 'The work area of the tasker' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskerDto.prototype, "work_area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Full-time except weekend', description: 'The work schedule of the tasker' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskerDto.prototype, "work_schedule", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1000000, description: 'The expected rate of the tasker' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTaskerDto.prototype, "expected_rate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'I am a good shipper and cleaner', description: 'The description of the tasker' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTaskerDto.prototype, "experience", void 0);
//# sourceMappingURL=create-tasker.dto.js.map