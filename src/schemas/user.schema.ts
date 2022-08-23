import { IsEmail, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateUserSchema {
  @IsString()
  @IsNotEmpty()
  @Min(3)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Min(6)
  password: string;
}

export class UpdateUserSchema {
  @IsString()
  @Min(3)
  name: string;

  @IsEmail()
  email: string;
}
