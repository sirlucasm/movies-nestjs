import { Entity, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';
import { hashSync } from 'bcryptjs';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 14 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10)
  }
}
