import { MiddlewareConsumer, Module } from '@nestjs/common';
import configuration from '../config/configuration';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from 'src/logger/logger.middleware';
import { SearchModule } from 'src/search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    SearchModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
