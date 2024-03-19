import { Controller, Logger, Post } from '@nestjs/common';

@Controller('polls')
export class PollsController {
  @Post()
  async create() {
    Logger.log('In Create');
  }
}
