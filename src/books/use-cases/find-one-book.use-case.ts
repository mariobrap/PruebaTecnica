import { Injectable } from "@nestjs/common";
import { BooksService } from "../books.service";

@Injectable()
export class FindOneBookUseCase {
    constructor(private readonly booksService: BooksService) { }

    execute(id: string){
        return this.booksService.findOne(id);
    }
}