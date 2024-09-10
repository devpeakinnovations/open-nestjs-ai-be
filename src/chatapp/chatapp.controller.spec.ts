import { Test, TestingModule } from '@nestjs/testing';
import { ChatappController } from './chatapp.controller';

describe('ChatappController', () => {
  let controller: ChatappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatappController],
    }).compile();

    controller = module.get<ChatappController>(ChatappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
