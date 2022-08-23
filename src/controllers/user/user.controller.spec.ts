import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from '../../services/user/user.service';
import { User } from 'src/models/user/user.entity';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useFactory: () => ({
            find: jest.fn(() => [])
          })
        }
      ]
    }).compile();

    userController = module.get<UserController>(UserController);
  });

  it('should return User array', async () => {
    const users = await userController.index();
    expect(users).toEqual([]);
  });
});
