import {Item} from "./Item";
import {Participant} from "./Participant";
import {Share} from "./Share";

export interface Bill {
  title?: string,
  date: Date,
  items: Item[],
  participants: Participant[],
  payments: Share[]
}