import {
  Module,
  CacheModule,
  CacheInterceptor,
} from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import * as redisStore from 'cache-manager-ioredis';
import { RedisOptions } from "./redis.option";

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore,
        ...RedisOptions()
      })
    })
  ],
  exports: [
    RedisCacheModule
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ]
})

export class RedisCacheModule {};
