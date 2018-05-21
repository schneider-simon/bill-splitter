import {Participant} from "../models/Participant";
import {Share} from "../models/Share";

export const getEmptyShare = (participant: Participant): Share => {
  return {
    participant,
    percent: undefined,
    amount: undefined
  }
}