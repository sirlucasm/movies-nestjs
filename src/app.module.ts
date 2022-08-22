import { Module } from '@nestjs/common';
import { RedisCacheModule } from './providers/redis/redis.module';
import { UserModule } from './modules/user/user.module';
import { AppController } from './controllers/app/app.controller';

@Module({
  imports: [
    RedisCacheModule,
    UserModule
  ],
  controllers: [AppController],
})
export class AppModule {}
