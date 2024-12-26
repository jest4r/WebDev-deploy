import { Role } from 'src/enum/Role.enum';
export declare function RolesGuard(roles: Role[]): <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
