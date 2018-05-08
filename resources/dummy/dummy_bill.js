import {Item} from "../../src/models/Item"
import {Bill} from "../../src/models/Bill"
import {Share} from "../../src/models/Share"
import {Participant} from "../../src/models/Participant"

export const participant1: Participant = {
  name: "Simon",
  email: "simon@domain.com",
  color: "red"
}

export const participant2: Participant = {
  name: "Marc",
  email: "marc@domain.com",
  color: "blue"
}

export const item1: Item = {
  price: 5.00,
  title: "Item 1",
  shares: [
    {
      participant: participant1,
      amount: 3
    },
    {
      participant: participant1,
      amount: 2
    }
  ]
}

export const item2: Item = {
  price: 10.00,
  shares: [
    {
      participant: participant2,
      percent: 100
    }
  ]
}

export const item3: Item = {
  price: 7.5,
  shares: [
    {
      participant: participant1,
      percent: 50
    },
    {
      participant: participant1,
      percent: 50
    }
  ]
}

export const bill1: Bill = {
  title: "Dummy bill",
  date: Date.parse("01/01/2018"),
  items: [item1, item2, item3],
  participants: [participant1, participant2],
  payments: [
    {
      participant: participant1,
      percent: 75
    },
    {
      participant: participant2,
      percent: 25
    }
  ]
}