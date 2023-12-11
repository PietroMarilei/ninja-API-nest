import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// ✝ custom modules
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
