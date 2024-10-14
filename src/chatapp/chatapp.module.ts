import { Module } from '@nestjs/common';
import { ChatappController } from './chatapp.controller';
import { ChatappService } from './chatapp.service';

@Module({
  controllers: [ChatappController],
  providers: [ChatappService]
})
export class ChatappModule {
  get() {
    
  }
}
