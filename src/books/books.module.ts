import { MiddlewareConsumer, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ValidateJwtMiddleware } from 'src/common/middleware/ValidateJwt.middleware';

@Module({
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateJwtMiddleware).forRoutes(BooksController);
  }
}
