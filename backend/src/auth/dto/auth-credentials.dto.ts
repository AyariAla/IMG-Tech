import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { CustomMatchPasswords } from '../validate-password';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  name: string;

  @MinLength(10)
  @MaxLength(40)
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is weak',
  })
  password: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Validate(CustomMatchPasswords, ['password'])
  passwordConfirm: string;
}
