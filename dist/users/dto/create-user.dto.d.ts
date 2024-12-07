import { Gender } from 'src/enum/Gender.enum';
import { Role } from 'src/enum/Role.enum';
export declare class CreateUserDto {
    fullname: string;
    email: string;
    password: string;
    gender: Gender;
    date_of_birth: string;
    role: Role;
}
