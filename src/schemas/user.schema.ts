import { IsEmail, IsNotEmpty, IsString, Length, Min } from 'class-validator';

export class CreateUserSchema {
  @IsString()
  @IsNotEmpty()
  @Length(3, 14)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}

export class UpdateUserSchema {
  @IsString()
  @Length(3, 14)
  name: string;

  @IsEmail()
  email: string;
}
