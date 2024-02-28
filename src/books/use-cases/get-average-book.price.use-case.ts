import { Injectable } from "@nestjs/common";
import { BooksService } from "../books.service";

@Injectable()
export class GetAverageBookPriceUseCase {

    constructor(private readonly booksService: BooksService) { }

    execute() {
        return this.booksService.average();
    }
}