import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { CreateUserSchema, UpdateUserSchema } from 'src/schemas/user.schema';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) private repository: Repository<User>
  ) {}

  async findAll() {
    return await this.repository.find({
      select: ['name', 'email', 'created_at', 'updated_at']
    });
  }

  async create(data: CreateUserSchema) {
    const user = this.repository.create(data);
    return await this.repository.save(user);
  }

  async findOneOrFail(options?: FindOneOptions<User>) {
    try {
      return await this.repository.findOneOrFail(options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: string, data: UpdateUserSchema) {
    const user = await this.findOneOrFail({ where: { id } });
    this.repository.merge(user, data);
    return await this.repository.save(user);
  }

  async delete(id: string) {
    await this.findOneOrFail({ where: { id } });
    return await this.repository.softDelete(id);
  }
}
