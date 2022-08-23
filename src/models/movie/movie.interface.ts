export enum Type {
  MOVIE='movie',
  SERIE='serie'
}

export interface IMovie {
  id: string;
  title: string;
  plot: string;
  actors: string;
  director: string;
  genre: string;
  language: string;
  poster_url: string;
  type: string;
  year: string;
  runtime: string;
  dvd_date?: Date;
  country: string;
  created_at: Date;
  updated_at: Date;
}
