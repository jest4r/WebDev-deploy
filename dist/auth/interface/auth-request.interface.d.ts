import { Request } from 'express';
import { Role } from 'src/enum/Role.enum';
export interface AuthRequest extends Request {
    user: {
        user_id: number;
        role: Role;
    };
}
