import { Test, TestingModule } from '@nestjs/testing';
import { FirstsvcController } from './firstsvc.controller';
import { FirstsvcService } from './firstsvc.service';

describe('FirstsvcController', () => {
  let firstsvcController: FirstsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FirstsvcController],
      providers: [FirstsvcService],
    }).compile();

    firstsvcController = app.get<FirstsvcController>(FirstsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(firstsvcController.getHello()).toBe('Hello World!');
    });
  });
});
