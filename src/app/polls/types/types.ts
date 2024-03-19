export type CreatePollFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
  pollID: string;
  userID: string;
};

export type JoinPollFields = {
  pollID: string;
  name: string;
};

export type RejoinPollFields = {
  pollID: string;
  userID: string;
  name: string;
};
