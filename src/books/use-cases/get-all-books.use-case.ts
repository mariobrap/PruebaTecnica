import { QueryParamsDto } from "src/common/dto/queryParams.dto";
import { BooksService } from "../books.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class GetAllBooksUseCase {
    constructor(private readonly booksService: BooksService){}

    execute(queryParamsDto: QueryParamsDto){
        return this.booksService.findAll(queryParamsDto);
    }
}