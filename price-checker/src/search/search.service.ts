import { Injectable, HttpException } from '@nestjs/common';
import { dnsSearch } from '@spiders/dns/getSearch';
import { RedisCacheService } from 'src/redisCache/redisCache.service';
import { OutputSearchDto, SearchDto } from 'src/search/dto/search.dto';

@Injectable()
export class SearchService {
  constructor(private redisCacheService: RedisCacheService) {}

  public async dnsSearch(searchDto: SearchDto): Promise<OutputSearchDto[]> {
    return this.redisCacheService
      .cached(
        {
          key: 'dnsSearch',
          searchDto,
        },
        () => {
          return dnsSearch(searchDto.search);
        },
      )
      .catch(() => {
        throw new HttpException({}, 408);
      });
  }
}
