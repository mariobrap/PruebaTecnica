import { IsAlpha, IsNumber, IsOptional, IsPositive, IsString, Matches } from "class-validator";

export class QueryParamsDto {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    price?: number;

    @IsOptional()
    @IsString()
    @IsAlpha()
    phrase?: string;
}