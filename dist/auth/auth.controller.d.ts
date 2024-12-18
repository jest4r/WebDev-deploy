import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Request } from 'express';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: CreateUserDto): Promise<import("lodash").Omit<import("../users/entities/user.entity").User, "password">>;
    login(loginDto: LoginDto): Promise<{
        user: Omit<import("../users/entities/user.entity").User, "password">;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    test(req: Request): Promise<Express.User>;
    admin(req: Request): Promise<string>;
    refresh(refreshTokenDto: RefreshTokenDto): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
}
