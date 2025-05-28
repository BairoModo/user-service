import { IsEmail, IsString, IsNotEmpty, IsOptional, IsDate, IsPhoneNumber } from 'class-validator';
import { Transform } from 'class-transformer';
export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    firstNames: string;

    @IsString()
    @IsNotEmpty()
    lastName: string; 

    @IsPhoneNumber()
    @IsNotEmpty()
    phoneNumber: string;

    @IsDate()
    @IsNotEmpty()
    @Transform(({ value }) => new Date(value))
    dateOfBirth: Date;

    @IsOptional()
    @IsString()
    identityNumber?: string;

    @IsOptional()
    @IsString()
    identytyType?: string;
}
