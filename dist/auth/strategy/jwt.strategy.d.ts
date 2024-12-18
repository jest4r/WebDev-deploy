import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';
import { TokenPayload } from '../interface/token-payload.interface';
import { Role } from 'src/enum/Role.enum';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly usersService;
    constructor(configService: ConfigService, usersService: UsersService);
    validate(payload: TokenPayload): Promise<{
        user_id: number;
        role: Role;
        tasker_id: number;
        profile_id: number;
    }>;
}
export {};
