import { ConfigService } from '@nestjs/config';
import {
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { IORedisKey } from 'src/app/redis/redis.module';
import Redis from 'ioredis';
import { CreatePollFields } from 'src/app/polls/types/types';
import { Poll } from '../types/poll-types';

@Injectable()
export class PollsRepository {
  private readonly ttl: string;
  private readonly logger = new Logger(PollsRepository.name);

  constructor(
    configService: ConfigService,
    @Inject(IORedisKey) private readonly redisClient: Redis,
  ) {
    this.ttl = configService.get('POLL_DURATION');
  }

  async createPoll(fields: CreatePollFields): Promise<Poll> {
    const initialPoll: Poll = {
      id: fields.pollID,
      topic: fields.topic,
      votesPerVoter: fields.votesPerVoter,
      participants: {},
      adminID: fields.userID,
    };
    this.logger.log(
      `Creating new poll:${JSON.stringify(initialPoll, null, 2)} with TTL ${this.ttl}`,
    );
    const key = `polls:${fields.pollID}`;

    try {
      await this.redisClient
        .multi([
          ['send_command', 'JSON.SET', key, '.', JSON.stringify(initialPoll)],
          ['expire', key, this.ttl],
        ])
        .exec();
      return initialPoll;
    } catch (err) {
      this.logger.error(
        `Failed to add poll ${JSON.stringify(initialPoll)}\n${err}`,
      );
      throw new InternalServerErrorException();
    }
  }
}
