import {
  Module,
  CacheModule,
} from "@nestjs/common";
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: 6379,
        ttl: 60 * 3600 * 1000
      })
    })
  ],
  exports: [
    RedisCacheModule
  ]
})

export class RedisCacheModule {};
