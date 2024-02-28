import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseUUIDPipe } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { QueryParamsDto } from 'src/common/dto/queryParams.dto';
import { CreateOneBookUseCase } from './use-cases/create-one-book.use-case';
import { FindOneBookUseCase } from './use-cases/find-one-book.use-case';
import { GetAllBooksUseCase } from './use-cases/get-all-books.use-case';
import { GetAverageBookPriceUseCase } from './use-cases/get-average-book.price.use-case';

@Controller('books')
export class BooksController {
  constructor(
    private readonly createOneBookUseCase: CreateOneBookUseCase, 
    private readonly findOneBookUseCase: FindOneBookUseCase, 
    private readonly getAllBooksUseCase: GetAllBooksUseCase, 
    private readonly getAverageBookPriceUseCase: GetAverageBookPriceUseCase,
    ) { }

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.createOneBookUseCase.execute(createBookDto);
  }

  @Get()
  findAll(@Query() queryParamsDto: QueryParamsDto) {
    return this.getAllBooksUseCase.execute(queryParamsDto);
  }
  @Get('/average')
  average() {
    return this.getAverageBookPriceUseCase.execute();
  }
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.findOneBookUseCase.execute(id);
  }
}
