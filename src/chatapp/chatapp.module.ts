import { Module } from '@nestjs/common';
import { ChatappController } from './chatapp.controller';

@Module({
  controllers: [ChatappController]
})
export class ChatappModule {
  get(){
    
  }
}
