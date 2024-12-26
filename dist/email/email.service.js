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
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const config_1 = require("@nestjs/config");
const email_templates_1 = require("./templates/email.templates");
const confirm_templates_1 = require("./templates/confirm.templates");
const apply_templates_1 = require("./templates/apply.templates");
const chooseTasker_template_1 = require("./templates/chooseTasker.template");
const taskfortasker_templates_1 = require("./templates/taskfortasker.templates");
const taskerdecline_templates_1 = require("./templates/taskerdecline.templates");
const taskeraccept_templates_1 = require("./templates/taskeraccept.templates");
const taskeraccept_fortasker_templates_1 = require("./templates/taskeraccept_fortasker.templates");
const taskercompletetask_templates_1 = require("./templates/taskercompletetask.templates");
const userconfirmcompleted_templates_1 = require("./templates/userconfirmcompleted.templates");
const userreviewtasker_templates_1 = require("./templates/userreviewtasker.templates");
const otp_templates_1 = require("./templates/otp.templates");
let EmailService = class EmailService {
    constructor(configService) {
        this.configService = configService;
        this.nodemailerTransport = (0, nodemailer_1.createTransport)({
            service: configService.get('EMAIL_SERVICE'),
            auth: {
                user: configService.get('EMAIL_USER'),
                pass: configService.get('EMAIL_PASSWORD'),
            },
        });
    }
    sendMail(options) {
        return this.nodemailerTransport.sendMail(options);
    }
    sendWelcomeEmail(email) {
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: email,
            subject: 'Welcome to our platform 🎉',
            html: (0, email_templates_1.welcomeEmailTemplate)('Hoàng Xuân Trường'),
        });
    }
    sendOTP(email, otp) {
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: email,
            subject: 'OTP Verification',
            html: (0, otp_templates_1.otpEmailTemplate)(otp, email),
        });
    }
    sendAdminConfirmationEmail(user) {
        const email = this.configService.get('ADMIN_EMAIL');
        const url = this.configService.get('APP_URL');
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: email,
            subject: 'Xác nhận thanh toán',
            html: (0, confirm_templates_1.confirmEmailTemplate)(url, user),
        });
    }
    sendApplyTaskEmail(tasker, task, user) {
        const url = `${this.configService.get('APP_URL')}/taskmanage`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: user.email,
            subject: 'Thông báo đăng ký công việc',
            html: (0, apply_templates_1.taskerRegistrationTemplate)(url, tasker, task),
        });
    }
    chooseTaskerEmail(tasker, task) {
        const acceptUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}/pay`;
        const rejectUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}/reject`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: tasker.user.email,
            subject: 'Chúc mừng bạn đã được chọn',
            html: (0, chooseTasker_template_1.taskerConfirmationTemplate)(acceptUrl, rejectUrl, task, tasker),
        });
    }
    sendTaskEmail(task, tasker) {
        const url = `${this.configService.get('APP_URL')}/tasks/${task.id}`;
        const applyUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}/apply`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: tasker.user.email,
            subject: 'Công việc mới',
            html: (0, taskfortasker_templates_1.taskForTasker)(task, url, applyUrl),
        });
    }
    sendTaskerRejectionEmail(task) {
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: task.user.email,
            subject: 'Tasker đã từ chối công việc',
            html: (0, taskerdecline_templates_1.taskerDeclineTask)(task),
        });
    }
    sendTaskerAcceptEmail(task, tasker) {
        const viewTaskDetailsUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: task.user.email,
            subject: 'Tasker đã chấp nhận công việc',
            html: (0, taskeraccept_templates_1.taskerAcceptTask)(task, tasker, viewTaskDetailsUrl),
        });
    }
    sendTaskerAcceptForTaskerEmail(task, user) {
        const viewTaskDetailsUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: user.email,
            subject: 'Thông tin công việc',
            html: (0, taskeraccept_fortasker_templates_1.sendUserProfileForTasker)(task, user, viewTaskDetailsUrl),
        });
    }
    sendTaskerCompleteTaskEmail(task, tasker) {
        const viewTaskDetailsUrl = `${this.configService.get('APP_URL')}/tasks/${task.id}`;
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: task.user.email,
            subject: 'Tasker đã hoàn thành công việc',
            html: (0, taskercompletetask_templates_1.taskerCompleteTask)(task, tasker, viewTaskDetailsUrl),
        });
    }
    sendUserConfirmCompleted(user, task, tasker) {
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: tasker.user.email,
            subject: 'User đã xác nhận công việc hoàn thành',
            html: (0, userconfirmcompleted_templates_1.userConfirmCompleted)(user, task),
        });
    }
    sendUserTaskerReviewTask(user, task, tasker) {
        const platformUrl = this.configService.get('APP_URL');
        return this.sendMail({
            from: this.configService.get('EMAIL_USER'),
            to: tasker.user.email,
            subject: 'User đã review công việc',
            html: (0, userreviewtasker_templates_1.userReviewTasker)(user, task, platformUrl),
        });
    }
};
EmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], EmailService);
exports.default = EmailService;
//# sourceMappingURL=email.service.js.map