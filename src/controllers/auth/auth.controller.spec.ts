import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from 'src/models/user/user.entity';
import { AuthService } from 'src/services/auth/auth.service';
import { UserService } from 'src/services/user/user.service';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UserService,
        {
          provide: getRepositoryToken(User),
          useValue: {}
        },
        JwtService,
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('login', () => {
    it('should return an object with User credentials', async () => {
      const req = {
        user: { email: 'teste@gmail.com', id: '5a017960-ba63-4d0f-b074-80ebfa086e7a' }
      }
      const authUser = await authController.login(req);
      expect(authUser).toHaveProperty('user');
      expect(authUser).toHaveProperty('access_token');
    });
  });
});
