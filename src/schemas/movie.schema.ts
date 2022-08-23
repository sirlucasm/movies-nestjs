import { IsDate, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateMovieSchema {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @Length(15, 300)
  plot: string;

  @IsNotEmpty()
  actors: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  genre: string;

  @IsNotEmpty()
  language: string;

  @IsNotEmpty()
  poster_url: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  year: string;

  @IsNotEmpty()
  runtime: string;

  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  dvd_date?: Date;

  @IsNotEmpty()
  country: string;
}
