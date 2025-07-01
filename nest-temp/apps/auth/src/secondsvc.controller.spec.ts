import { Test, TestingModule } from '@nestjs/testing';
import { SecondsvcController } from './secondsvc.controller';
import { SecondsvcService } from './secondsvc.service';

describe('SecondsvcController', () => {
  let secondsvcController: SecondsvcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecondsvcController],
      providers: [SecondsvcService],
    }).compile();

    secondsvcController = app.get<SecondsvcController>(SecondsvcController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(secondsvcController.getHello()).toBe('Hello World!');
    });
  });
});
