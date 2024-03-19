import { Injectable } from '@nestjs/common';
import { createPollID, createUserID } from 'src/ids';
import {
  CreatePollFields,
  JoinPollFields,
  RejoinPollFields,
} from './types/types';
import { PollsRepository } from 'src/domain/repos/polls.repo';
@Injectable()
export class PollsService {
  constructor(private readonly pollsRepository: PollsRepository) {}
  async createPoll(
    fields: Pick<CreatePollFields, 'topic' | 'votesPerVoter' | 'name'>,
  ) {
    const pollID = createPollID();
    const userID = createUserID();

    const createdPoll = await this.pollsRepository.createPoll({
      ...fields,
      pollID,
      userID,
    });

    return {
      poll: createdPoll,
    };
  }

  async joinPoll(fields: JoinPollFields) {
    const userID = createUserID();
    return {
      ...fields,
      userID,
    };
  }

  async rejoinPoll(fields: RejoinPollFields) {
    return fields;
  }
}
