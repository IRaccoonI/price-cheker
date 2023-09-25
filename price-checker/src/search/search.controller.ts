import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { OutputSearchDto, SearchDto } from './dto/search.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ description: 'Create tag' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Searched results',
    type: OutputSearchDto,
    isArray: true,
  })
  @ApiResponse({
    status: HttpStatus.REQUEST_TIMEOUT,
    description: 'Spider has timed out',
  })
  create(@Query() searchDto: SearchDto) {
    return this.searchService.dnsSearch(searchDto);
  }
}
