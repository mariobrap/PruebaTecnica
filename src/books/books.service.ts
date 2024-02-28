import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import * as DATA from '../../data/MOCK_DATA.json';
import { Book } from './entities/book.entity';
import { QueryParamsDto } from 'src/common/dto/queryParams.dto';
import { v4 as uuid } from 'uuid';
import { validatePhrasePlugin } from './utils/validate-books.util';
import { BookRepository } from './book.repository';

@Injectable()
export class BooksService {


  constructor(private readonly bookRepository: BookRepository){}

  create(createBookDto: CreateBookDto) {
    const book: Book = {
      id: uuid(),
      ...createBookDto
    }
    this.bookRepository.save(book);
    return book;
  }

  findAll(queryParamsDto: QueryParamsDto) {
    const { price, phrase } = queryParamsDto;

    const booksList = this.bookRepository.findAll();
    
    if (price) {
      const books = booksList.filter(book => book.price > price);
      console.log(books.length);
      if (books.length === 0)
        throw new NotFoundException(`Books not found`)
      return books;
    }

    if (phrase)
      return this.findBooksByPhrase(phrase);

    return this.bookRepository.findAll();
  }

  findOne(id: string) {
    const book = this.bookRepository.findOne(id);
    if (!book)
      throw new BadRequestException(`Book not found`);
    return book;
  }

  average() {
    const books = this.bookRepository.findAll();
    const average = +(books.reduce((contador, book) => contador + book.price, 0) / books.length).toFixed(2);
    return { average };
  }
  private findBooksByPhrase(phrase: string) {
    const books = this.bookRepository.findAll();
    const filteredBooks = books.filter((book: Book) => {
      const author = book.author.toLowerCase();
      const validated = validatePhrasePlugin(author, phrase);
      if (validated) {
        return book;
      }
    });
    if(filteredBooks.length === 0)
      throw new NotFoundException(`Books not found`)
    return filteredBooks;
  }
}
