import * as React from 'react';
import {Bill} from "../../../models/Bill";
import {Share} from "../../../models/Share";
import {Item} from "../../../models/Item";
import {round} from "lodash"
import {HtmlMouseEvent} from "../../../types/react_types";

export interface ShareSelectProps {
  share: Share,
  bill: Bill,
  item: Item,
  onChange: (share: Share) => void
}

export const ShareSelect: React.SFC<ShareSelectProps> = (props) => {
  const onClick = (event: HtmlMouseEvent): void => {
    const size = [
      event.currentTarget.clientWidth,
      event.currentTarget.clientHeight
    ]

    const position = [
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY
    ]

    const percent = round(position[0] / size[0], 2)
    console.log(percent)
  }

  return <div className="share-select" onClick={onClick}>
    {props.item.price}
  </div>
}