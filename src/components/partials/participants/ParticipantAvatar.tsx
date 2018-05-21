import * as React from 'react';
import {Participant} from "../../../models/Participant";
import Avatar from "@material-ui/core/es/Avatar";

export interface ParticipantAvatarProps {
  participant: Participant
}

export const ParticipantAvatar: React.SFC<ParticipantAvatarProps> = (props) => {
  return <Avatar>{props.participant.name[0]}</Avatar>
}