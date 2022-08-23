import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) private repository: Repository<User>
  ) {}

  async find() {
    return await this.repository.find();
  }
}
