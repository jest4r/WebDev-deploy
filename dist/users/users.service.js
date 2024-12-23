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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const lodash_1 = require("lodash");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserDto) {
        try {
            const { fullname, email, password } = createUserDto;
            const unique = await this.usersRepository.findOne({ where: { email } });
            if (unique) {
                throw new common_1.ConflictException('Email already exists');
            }
            const hash_password = await bcrypt.hash(password, 10);
            const user = this.usersRepository.create({
                fullname,
                email,
                password: hash_password,
            });
            await this.usersRepository.save(user);
            return (0, lodash_1.omit)(user, ['password']);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const users = await this.usersRepository.find();
            return users.map((user) => (0, lodash_1.omit)(user, 'password'));
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (user === undefined) {
                throw new common_1.NotFoundException('User not found');
            }
            return (0, lodash_1.omit)(await this.usersRepository.findOne({ where: { id } }), [
                'password',
            ]);
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            const user = await this.usersRepository.findOne({ where: { email } });
            if (user === undefined) {
                throw new common_1.NotFoundException('User not found');
            }
            return this.usersRepository.findOne({ where: { email } });
        }
        catch (error) {
            throw error;
        }
    }
    findByEmailForAuth(email) {
        try {
            const user = this.usersRepository.findOne({ where: { email } });
            if (user) {
                return user;
            }
            throw new common_1.NotFoundException('User not found at users service');
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            const { password, ...rest } = updateUserDto;
            if (user === undefined) {
                throw new common_1.NotFoundException('User not found');
            }
            if (password) {
                const hash_password = await bcrypt.hash(password, 10);
                updateUserDto.password = hash_password;
            }
            const res = await this.usersRepository.update({ id }, updateUserDto);
            return (0, lodash_1.omit)(await this.usersRepository.findOne({ where: { id } }), [
                'password',
            ]);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const user = await this.usersRepository.findOne({ where: { id } });
            if (user === undefined) {
                throw new common_1.NotFoundException('User not found');
            }
            this.usersRepository.delete({ id });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map