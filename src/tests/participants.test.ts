import {Participant} from "../models/Participant";
import {participant1, participant2} from "../resources/dummy/dummy_bill";
import {getParticipantsList} from "../services/participants";

it('adds participants to list if length is longer', () => {
  const participants: Participant[] = [participant1, participant2]
  const nextParticipants = getParticipantsList(participants, participants.length + 1)
  expect(nextParticipants.length).toBe(participants.length + 1);
  expect(nextParticipants[1]).toBe(participant2);
  expect(nextParticipants[2].name).toBe("C");
});

it('adds removes to list if length is shorter', () => {
  const participants: Participant[] = [participant1]
  const nextParticipants = getParticipantsList(participants, participants.length - 1)
  expect(nextParticipants.length).toBe(participants.length - 1);
});