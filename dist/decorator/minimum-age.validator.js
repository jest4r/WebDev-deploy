"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinimumAgeConstraint = void 0;
exports.MinimumAge = MinimumAge;
const class_validator_1 = require("class-validator");
let MinimumAgeConstraint = class MinimumAgeConstraint {
    validate(dateOfBirth, args) {
        const today = new Date();
        const dob = new Date(dateOfBirth);
        const minAge = args.constraints[0];
        const age = today.getFullYear() - dob.getFullYear();
        const isOldEnough = age > minAge ||
            (age === minAge &&
                today >= new Date(dob.setFullYear(dob.getFullYear() + minAge)));
        return isOldEnough;
    }
    defaultMessage(args) {
        const minAge = args.constraints[0];
        return `Người dùng phải lớn hơn ${minAge} tuổi`;
    }
};
exports.MinimumAgeConstraint = MinimumAgeConstraint;
exports.MinimumAgeConstraint = MinimumAgeConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: false })
], MinimumAgeConstraint);
function MinimumAge(age, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName,
            constraints: [age],
            options: validationOptions,
            validator: MinimumAgeConstraint,
        });
    };
}
//# sourceMappingURL=minimum-age.validator.js.map