import { ValidationArguments, ValidationOptions, ValidatorConstraintInterface } from 'class-validator';
export declare class MinimumAgeConstraint implements ValidatorConstraintInterface {
    validate(dateOfBirth: string, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
export declare function MinimumAge(age: number, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
