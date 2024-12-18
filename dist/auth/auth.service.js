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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const config_1 = require("@nestjs/config");
const lodash_1 = require("lodash");
let AuthService = class AuthService {
    constructor(usersService, jwtService, configService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async register(registerDto) {
        return this.usersService.create(registerDto);
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        try {
            const user = await this.usersService.findByEmailForAuth(email);
            if (!user) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const isPasswordMatching = await bcrypt.compare(password, user.password);
            if (!isPasswordMatching) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const token = await this.getToken({ user_id: user.id });
            return {
                user: (0, lodash_1.omit)(user, 'password'),
                token,
            };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async refresh(refreshToken) {
        try {
            const payload = await this.verifyRefreshToken(refreshToken);
            const user = await this.usersService.findById(payload.user_id);
            const tokens = this.getToken({ user_id: user.id });
            return tokens;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Unauthorized');
        }
    }
    async getToken(payload) {
        const access_token = await this.generateAccessToken(payload);
        const refresh_token = await this.generateRefreshToken(payload);
        return { access_token, refresh_token };
    }
    async generateAccessToken(payload) {
        const token = await this.jwtService.signAsync(payload);
        const decodedToken = this.jwtService.decode(token);
        const expirationTime = new Date(decodedToken.exp * 1000);
        console.log(`Token of user ${payload.user_id} expires at: ${expirationTime}`);
        setTimeout(() => {
            console.log(`Token for user ${payload.user_id} has expired at: ${new Date()}`);
        }, decodedToken.exp * 1000 - Date.now());
        return token;
    }
    async generateRefreshToken(payload) {
        const token = await this.jwtService.signAsync(payload, {
            secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            expiresIn: this.configService.get('REFRESH_TOKEN_EXPIRATION_TIME'),
        });
        return token;
    }
    async verifyRefreshToken(refreshToken) {
        try {
            const payload = await this.jwtService.verifyAsync(refreshToken, {
                secret: this.configService.get('REFRESH_TOKEN_SECRET'),
            });
            return payload;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map