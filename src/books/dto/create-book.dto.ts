import { IsNumber, IsPositive, IsString, Max, Min } from "class-validator";

export class CreateBookDto {
    @IsString()
    readonly title: string;
    @IsString()
    readonly author: string;
    @IsNumber()
    @IsPositive()
    readonly price: number;
    @IsNumber()
    readonly availability: number;
    @IsNumber()
    readonly num_reviews: number;
    @IsNumber()
    @Min(0)
    @Max(5)
    readonly stars: number;
    @IsString()
    readonly description: string;
}
