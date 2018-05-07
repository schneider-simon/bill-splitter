import {Share} from "./Share";

export interface Item {
  price?: number,
  percent?: number,
  title?: string,
  shares: Share[]
}