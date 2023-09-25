import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { RedisCacheModule } from 'src/redisCache/redisCache.module';

@Module({
  imports: [RedisCacheModule],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
