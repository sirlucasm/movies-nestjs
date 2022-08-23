import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Type } from './movie.interface';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  plot: string;

  @Column()
  actors: string;

  @Column()
  director: string;

  @Column()
  genre: string;

  @Column()
  language: string;

  @Column()
  poster_url: string;

  @Column({ type: 'enum', enum: Type })
  type: string;

  @Column()
  year: string;

  @Column()
  runtime: string;

  @Column({ type: 'timestamp', nullable: true })
  dvd_date: Date;

  @Column()
  country: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
