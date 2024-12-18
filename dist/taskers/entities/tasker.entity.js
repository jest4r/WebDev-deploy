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
exports.Tasker = void 0;
const skill_entity_1 = require("../../skills/entities/skill.entity");
const task_entity_1 = require("../../tasks/entities/task.entity");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Tasker = class Tasker {
    setDates() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
    updateDates() {
        this.updated_at = new Date();
    }
};
exports.Tasker = Tasker;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tasker.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
    __metadata("design:type", String)
], Tasker.prototype, "work_area", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Tasker.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Tasker.prototype, "completed_tasks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', default: 0 }),
    __metadata("design:type", Number)
], Tasker.prototype, "avg_rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Tasker.prototype, "rating_count", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.tasker),
    __metadata("design:type", user_entity_1.User)
], Tasker.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => skill_entity_1.Skill, (skill) => skill.taskers),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Tasker.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.Task, (task) => task.tasker),
    __metadata("design:type", Array)
], Tasker.prototype, "applied_tasks", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => task_entity_1.Task, (task) => task.taskers),
    __metadata("design:type", Array)
], Tasker.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Tasker.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Tasker.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tasker.prototype, "setDates", null);
__decorate([
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tasker.prototype, "updateDates", null);
exports.Tasker = Tasker = __decorate([
    (0, typeorm_1.Entity)()
], Tasker);
//# sourceMappingURL=tasker.entity.js.map