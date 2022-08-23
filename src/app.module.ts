import { Module } from '@nestjs/common';
import { RedisCacheModule } from './providers/redis/redis.module';
import { UserModule } from './modules/user/user.module';
import { AppController } from './controllers/app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RedisCacheModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule
  ],
  controllers: [AppController],
})
export class AppModule {}
