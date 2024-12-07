import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Omit } from 'lodash';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>>;
    findAll(): Promise<Omit<User, 'password'>[]>;
    findById(id: number): Promise<Omit<User, 'password'>>;
    findByEmail(email: string): Promise<Omit<User, 'password'>>;
    findByEmailForAuth(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<Omit<User, 'password'>>;
    remove(id: number): Promise<void>;
}
