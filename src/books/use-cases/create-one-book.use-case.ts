import { Injectable } from "@nestjs/common";
import { BooksService } from "../books.service";
import { CreateBookDto } from "../dto/create-book.dto";

@Injectable()
export class CreateOneBookUseCase {
    constructor(private readonly booksService: BooksService) { }

    execute(createBookDto: CreateBookDto) {
        return this.booksService.create(createBookDto);
    }
}