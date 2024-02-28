import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import * as DATA from '../../data/MOCK_DATA.json';
import { Book } from './entities/book.entity';
import { QueryParamsDto } from 'src/common/dto/queryParams.dto';
import { v4 as uuid } from 'uuid';
import { validatePhrasePlugin } from './utils/validate-books.util';

@Injectable()
export class BooksService {

  private books: Book[] = DATA;

  create(createBookDto: CreateBookDto) {
    const book: Book = {
      id: uuid(),
      ...createBookDto
    }
    this.books.push(book);
    return book;
  }

  findAll(queryParamsDto: QueryParamsDto) {
    const { price, phrase } = queryParamsDto;

    if (price) {
      const books = this.books.filter(book => book.price > price);
      console.log(books.length);
      if (books.length === 0)
        throw new NotFoundException(`Books not found`)
      return books;
    }

    if (phrase)
      return this.findBooksByPhrase(phrase);

    return this.books;
  }

  findOne(id: string) {
    const book = this.books.find(book => book.id === id);
    if (!book)
      throw new BadRequestException(`Book not found`);
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
  averge() {
    const average = +(this.books.reduce((contador, book) => contador + book.price, 0) / this.books.length).toFixed(2);
    return { average };
  }
  private findBooksByPhrase(phrase: string) {
    const books = this.books;
    const filteredBooks = books.filter((book: Book) => {
      const author = book.author.toLowerCase();
      const validated = validatePhrasePlugin(author, phrase);
      if (validated) {
        return book;
      }
    });
    return filteredBooks;
  }
}
