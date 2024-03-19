import { Module } from '@nestjs/common';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { PollsRepository } from 'src/domain/repos/polls.repo';
import { redisModule } from 'src/modules.config';

@Module({
  imports: [redisModule],
  controllers: [PollsController],
  providers: [PollsRepository, PollsService],
})
export class PollsModule {}
