import {Participant} from "./Participant";

export interface Share {
  participant: Participant,
  percent?: number,
  amount?: number
}