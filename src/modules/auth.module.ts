import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from 'src/config/auth/strategies/local.strategy';
import { JwtStrategy } from 'src/config/auth/strategies/jwt.strategy';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { UserModule } from './user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_PRIVATE_KEY,
      signOptions: { expiresIn: '10d' }
    })
  ],
  controllers: [
    AuthController
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {}
