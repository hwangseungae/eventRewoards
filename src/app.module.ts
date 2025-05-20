import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { RewardModule } from './reward/reward.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [EventModule, RewardModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
