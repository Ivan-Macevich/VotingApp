import * as nanoid from 'nanoid';
export const createPollID = nanoid.customAlphabet(
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  6,
);
export const createUserID = () => nanoid.nanoid();
export const createNominationID = () => nanoid.nanoid(8);
