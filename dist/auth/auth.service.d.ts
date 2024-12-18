import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registerDto: CreateUserDto): Promise<import("lodash").Omit<User, "password">>;
    login(loginDto: LoginDto): Promise<{
        user: Omit<User, 'password'>;
        token: {
            access_token: string;
            refresh_token: string;
        };
    }>;
    refresh(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    private getToken;
    private generateAccessToken;
    private generateRefreshToken;
    private verifyRefreshToken;
}
