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
exports.CreateTaskDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Task title', description: 'The title of the task' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Task description',
        description: 'The description of the task',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(500),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'skill ID', description: 'The skill of the task' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "skill_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'district ID',
        description: 'The district of the task',
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "district", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'street name',
        description: 'The street of the task',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "ward", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '14 Xuaan Thuy',
        description: 'The address of the task',
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "detail_address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '100',
        description: 'The duration of the task',
    }),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "estimated_duration", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1000000',
        description: 'The fee per hour of the task',
    }),
    (0, class_validator_1.IsNumberString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "fee_per_hour", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1999-12-31',
        description: 'The start date of the task',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateTaskDto.prototype, "start_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1999-12-31',
        description: 'The end date of the task',
    }),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Date)
], CreateTaskDto.prototype, "end_date", void 0);
//# sourceMappingURL=create-task.dto.js.map