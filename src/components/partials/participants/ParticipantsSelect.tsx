import * as React from 'react';
import {Participant} from "../../../models/Participant";
import {getParticipantsList} from "../../../services/participants";
import {ParticipantAvatar} from "./ParticipantAvatar";

export interface ParticipantsSelectProps {
  participants: Participant[],
  onChange: (participants: Participant[]) => void
}

export const ParticipantsSelect: React.SFC<ParticipantsSelectProps> = (props) => {
  const renderAvatars = () => {
    return props.participants.map((participant, i) => {
      return (
          <ParticipantAvatar key={i} participant={participant}/>
      )
    })
  }

  const onChange = (value: number) => {
    const participants = getParticipantsList(props.participants, value)
    props.onChange(participants)
  }

  return <div>
    <button className="btn btn-secondary" onClick={() => onChange(props.participants.length - 1)}>
      -
    </button>
    <button className="btn btn-secondary" onClick={() => onChange(props.participants.length + 1)}>
      +
    </button>
    {renderAvatars()}
  </div>
}