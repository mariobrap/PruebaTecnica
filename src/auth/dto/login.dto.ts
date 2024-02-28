import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    readonly user: string;
    @IsString()
    readonly password: string;
}