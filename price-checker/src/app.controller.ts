import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { dnsSearch } from '@spiders/dns/getSearch';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/search')
  async getHello() {
    return await dnsSearch();
  }
}
