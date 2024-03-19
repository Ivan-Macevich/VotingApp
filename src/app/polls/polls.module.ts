import { Module } from '@nestjs/common';
import { PollsController } from './polls.controller';

@Module({
  imports: [],
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}
