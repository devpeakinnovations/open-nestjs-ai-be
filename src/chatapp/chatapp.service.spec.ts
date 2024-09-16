import { Test, TestingModule } from '@nestjs/testing';
import { ChatappService } from './chatapp.service';

describe('ChatappService', () => {
  let service: ChatappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatappService],
    }).compile();

    service = module.get<ChatappService>(ChatappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
