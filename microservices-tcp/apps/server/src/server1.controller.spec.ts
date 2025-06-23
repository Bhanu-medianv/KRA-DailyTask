import { Test, TestingModule } from '@nestjs/testing';
import { Server1Controller } from './server1.controller';
import { Server1Service } from './server1.service';

describe('Server1Controller', () => {
  let server1Controller: Server1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Server1Controller],
      providers: [Server1Service],
    }).compile();

    server1Controller = app.get<Server1Controller>(Server1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(server1Controller.getHello()).toBe('Hello World!');
    });
  });
});
