import { Module } from '@nestjs/common';
import { RedisCacheModule } from './providers/redis/redis.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    RedisCacheModule,
    UserModule
  ],
})
export class AppModule {}
