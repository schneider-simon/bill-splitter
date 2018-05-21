import {Item} from "../models/Item";
import {Bill} from "../models/Bill";
import {Participant} from "../models/Participant";
import {Share} from "../models/Share";

export const getEmptyItem = (): Item => {
  return {
    price: undefined,
    percent: undefined,
    title: "",
    shares: []
  }
}

export const itemIsValid = (item: Item, bill: Bill): boolean => {
  if (!item.price) {
    return false
  }

  if (item.shares.length === 0) {
    return false
  }

  return true
}

export const getShareForParticipant = (participant: Participant, item: Item): Share | undefined => {
  return item.shares.find((share: Share) => share.participant === participant)
}