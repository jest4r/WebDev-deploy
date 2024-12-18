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
const Role_enum_1 = require("../enum/Role.enum");
const profile_entity_1 = require("./entities/profile.entity");
let UsersService = class UsersService {
    constructor(usersRepository, profileRepository) {
        this.usersRepository = usersRepository;
        this.profileRepository = profileRepository;
    }
    async create(createUserDto) {
        try {
            const { email, password, role, ...rest } = createUserDto;
            const hash_password = await bcrypt.hash(password, 10);
            const existsUser = await this.usersRepository.findOne({
                where: { email },
            });
            if (existsUser) {
                throw new common_1.ConflictException('User with email already exists');
            }
            const user = this.usersRepository.create({
                ...rest,
                email: email,
                password: hash_password,
                role: role || Role_enum_1.Role.USER,
            });
            const exitsProfile = await this.profileRepository.findOne({
                where: { phone_number: createUserDto.phone_number },
            });
            if (exitsProfile) {
                throw new common_1.ConflictException('User with phone_number already exists');
            }
            const birth_date = new Date(createUserDto.date_of_birth);
            const profile = this.profileRepository.create({
                user: user,
                birth_date,
                ...createUserDto,
            });
            user.profile = profile;
            await this.profileRepository.save(profile);
            await this.usersRepository.save(user);
            return (0, lodash_1.omit)(user, 'password');
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            const users = await this.usersRepository.find({
                relations: ['profile', 'tasker', 'tasker.skills'],
            });
            return users.map((user) => (0, lodash_1.omit)(user, 'password'));
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const user = await this.usersRepository.findOne({
                where: { id },
                relations: ['profile', 'tasker', 'tasker.skills'],
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            return (0, lodash_1.omit)(user, ['password']);
        }
        catch (error) {
            throw error;
        }
    }
    async findByEmail(email) {
        try {
            const user = await this.usersRepository.findOne({
                where: { email },
                relations: ['profile'],
            });
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
            const user = this.usersRepository.findOne({
                where: { email },
                relations: ['profile', 'tasker', 'tasker.skills'],
            });
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
            const user = await this.usersRepository.findOne({
                where: { id },
                relations: ['profile'],
            });
            const profile = await this.profileRepository.findOne({
                where: { user: { id } },
            });
            const { password, ...rest } = updateUserDto;
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            if (!user) {
                throw new common_1.NotFoundException('Profile not found');
            }
            if (password) {
                const hash_password = await bcrypt.hash(password, 10);
                const res = await this.usersRepository.update({ id }, { password: hash_password });
                if (res.affected === 0) {
                    throw new common_1.NotFoundException('User not found');
                }
                return (0, lodash_1.omit)(await this.usersRepository.findOne({
                    where: { id },
                    relations: ['profile'],
                }), 'password');
            }
            const res = await this.profileRepository.update({ id }, rest);
            return (0, lodash_1.omit)(await this.usersRepository.findOne({
                where: { id },
                relations: ['profile'],
            }), ['password']);
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const user = await this.usersRepository.findOne({
                where: { id },
                relations: ['profile'],
            });
            if (user === undefined) {
                throw new common_1.NotFoundException('User not found');
            }
            this.profileRepository.delete({ id: user.profile.id });
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
    __param(1, (0, typeorm_1.InjectRepository)(profile_entity_1.Profile)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map