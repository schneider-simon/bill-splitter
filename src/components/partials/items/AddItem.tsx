import * as React from 'react';
import {Bill} from "../../../models/Bill";
import {Item} from "../../../models/Item";
import {getEmptyItem, itemIsValid} from "../../../services/items";
import {Button} from "../form/Button";
import {onInput} from "../../../helpers/data";
import {ShareSelectList} from "../share/ShareSelectList";
import {Share} from "../../../models/Share";

export interface AddItemProps {
  onAdd: (item: Item) => void;
  bill: Bill
}

export interface AddItemState {
  item: Item
}

export class AddItem extends React.Component<AddItemProps, AddItemState> {
  private readonly onInput: any;

  constructor(props: AddItemProps) {
    super(props)

    this.state = {
      item: getEmptyItem()
    }

    this.onClick = this.onClick.bind(this)
    this.onInput = onInput(this.setState)
    this.onChangeShare = this.onChangeShare.bind(this)
  }

  public render() {
    return (
        <div>
          <input type="number" onChange={this.onInput("price")} value={this.state.item.price} className="form-control"/>
          <Button disabled={!itemIsValid(this.state.item, this.props.bill)} secondary={true} onClick={this.onClick}>
            Add
          </Button>
          <ShareSelectList
              bill={this.props.bill}
              item={this.state.item}
              onChange={this.onChangeShare}
          />
        </div>
    );
  }

  private onChangeShare(share: Share) {
    console.log("share", share)
  }

  private onClick() {
    this.props.onAdd(this.state.item)
  }
}