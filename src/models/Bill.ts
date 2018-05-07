import {Item} from "./Item";
import {Participant} from "./Participant";

export interface Bill {
  title?: string,
  date: Date,
  items: Item[],
  participants: Participant[]
}