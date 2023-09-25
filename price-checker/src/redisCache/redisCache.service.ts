import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { RedisCacheError } from 'src/redisCache/redisError';

@Injectable()
export class RedisCacheService {
  constructor(@Inject(CACHE_MANAGER) private readonly cache: Cache) {}

  async get(key) {
    await this.cache.get(key);
  }

  async set(key, value) {
    await this.cache.set(key, value);
  }

  async cached<T>(
    userKey: Record<string, unknown> & { key: string; tag?: string },
    fn: () => T,
  ): Promise<T> {
    const { tag, ...key } = userKey;
    const redisKey = (tag ? `${tag}:` : '') + JSON.stringify(key);
    const redisValue: string = await this.cache.get(redisKey);
    if (redisValue) {
      return JSON.parse(redisValue);
    }

    const fnResult = await Promise.resolve(fn()).catch(() => {
      throw new RedisCacheError();
    });

    await this.cache.set(redisKey, JSON.stringify(fnResult));
    return fnResult;
  }
}
