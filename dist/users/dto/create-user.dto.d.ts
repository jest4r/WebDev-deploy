import { Gender } from 'src/enum/Gender.enum';
import { Role } from 'src/enum/Role.enum';
export declare class CreateUserDto {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    password: string;
    gender: Gender;
    date_of_birth: string;
    role?: Role;
}
