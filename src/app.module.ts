import { Module } from '@nestjs/common';
import { RedisCacheModule } from './providers/redis/redis.module';
import { UserModule } from './modules/user.module';
import { AppController } from './controllers/app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import { MovieModule } from './modules/movie.module';
import { MovieService } from './services/movie/movie.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RedisCacheModule,
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
    AuthModule,
    MovieModule
  ],
  controllers: [AppController]
})
export class AppModule {}
