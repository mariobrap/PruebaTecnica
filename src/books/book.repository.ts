import { Book } from "./entities/book.entity";
import * as DATA from '../../data/MOCK_DATA.json';
import { Injectable } from "@nestjs/common";
@Injectable()
export class BookRepository {
   
    private books: Book[] = DATA;
    findAll() {
        return this.books;
    }
    save(book: Book) {
        this.books.push(book);
    }
    findOne(id: string) {
        return this.books.find(book => book.id === id);
    }
}