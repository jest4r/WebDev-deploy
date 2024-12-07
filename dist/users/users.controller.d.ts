import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthRequest } from 'src/auth/interface/auth-request.interface';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("lodash").Omit<import("./entities/user.entity").User, "password">>;
    findAll(): Promise<import("lodash").Omit<import("./entities/user.entity").User, "password">[]>;
    findMe(req: AuthRequest, id: string): Promise<import("lodash").Omit<import("./entities/user.entity").User, "password">>;
    update(req: AuthRequest, id: string, updateUserDto: UpdateUserDto): Promise<import("lodash").Omit<import("./entities/user.entity").User, "password">>;
    remove(req: AuthRequest, id: string): Promise<void>;
}
