import {Participant} from "../models/Participant";
import {getCharacterAtIndex} from "../helpers/string_helper";

export const getParticipantsList = (existingParticipants: Participant[], length: number): Participant[] => {
  let participants: Participant[] = existingParticipants.slice(0)

  if (participants.length > length) {
    participants = participants.slice(0, participants.length - 1)
  }

  for (let i = participants.length; i < length; i++) {
    const participant: Participant = {
      name: getCharacterAtIndex(i),
      color: "red"
    }

    participants.push(participant)
  }

  return participants
}