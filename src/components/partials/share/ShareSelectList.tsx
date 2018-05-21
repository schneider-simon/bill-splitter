import * as React from 'react';
import {Bill} from "../../../models/Bill";
import {ShareSelect} from "./ShareSelect";
import {Participant} from "../../../models/Participant";
import {Item} from "../../../models/Item";
import {getShareForParticipant} from "../../../services/items";
import {getEmptyShare} from "../../../services/shares";
import {Share} from "../../../models/Share";

export interface ShareSelectListProps {
  bill: Bill,
  item: Item,
  onChange: (share: Share) => void
}

export const ShareSelectList: React.SFC<ShareSelectListProps> = (props) => {
  const renderShareSelects = () => {
    return props.bill.participants.map((participant: Participant) => {
      let share = getShareForParticipant(participant, props.item)

      if (!share) {
        share = getEmptyShare(participant)
      }

      return (
          <ShareSelect
              key={participant.name}
              bill={props.bill}
              share={share}
              item={props.item}
              onChange={props.onChange}
          />
      )
    })
  }

  return <ul className="share-select-list list-unstyled">
    {renderShareSelects()}
  </ul>
}