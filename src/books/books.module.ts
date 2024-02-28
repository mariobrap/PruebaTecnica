import { MiddlewareConsumer, Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ValidateJwtMiddleware } from 'src/common/middleware/ValidateJwt.middleware';
import { BookRepository } from './book.repository';
import { CreateOneBookUseCase } from './use-cases/create-one-book.use-case';
import { FindOneBookUseCase } from './use-cases/find-one-book.use-case';
import { GetAllBooksUseCase } from './use-cases/get-all-books.use-case';
import { GetAverageBookPriceUseCase } from './use-cases/get-average-book.price.use-case';

@Module({
  controllers: [BooksController],
  providers: [
    BooksService, 
    BookRepository, 
    CreateOneBookUseCase, 
    FindOneBookUseCase, 
    GetAllBooksUseCase, 
    GetAverageBookPriceUseCase
  ],
})
export class BooksModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidateJwtMiddleware).forRoutes(BooksController);
  }
}
