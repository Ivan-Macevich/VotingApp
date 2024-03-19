import { Participants } from '../types/poll-types';

export class PollDto {
  id: string;
  topic: string;
  votesPerVoter: number;
  participants: Participants;
  adminID: string;
}
