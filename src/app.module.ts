import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatappModule } from './chatapp/chatapp.module';

@Module({
  imports: [ChatappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
