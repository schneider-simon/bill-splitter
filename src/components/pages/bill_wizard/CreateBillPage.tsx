import * as React from 'react';
import {Page} from '../page/Page';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changePage} from "../../../state/actions/routing_actions";
import {RouterAction} from "react-router-redux";
import {ParticipantsSelect} from "../../partials/participants/ParticipantsSelect";
import {bill1} from "../../../resources/dummy/dummy_bill";
import {Bill} from "../../../models/Bill";
import {HtmlChangeEvent} from "../../../types/react_types";
import {Card} from "../../partials/card/Card";
import {AppBar} from "../../partials/app_bar/AppBar";
import {Participant} from "../../../models/Participant";
import {AddItem} from "../../partials/items/AddItem";
import {Item} from "../../../models/Item";

export interface CreateBillPageProps {
  changePage: (location: string) => RouterAction
}

export interface CreateBillPageState {
  bill: Bill
}

class CreateBillPageClass extends React.Component<CreateBillPageProps, CreateBillPageState> {
  constructor(props: CreateBillPageProps) {
    super(props)

    this.state = {
      bill: bill1
    }

    this.changeTitle = this.changeTitle.bind(this)
    this.changeParticipants = this.changeParticipants.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  public render() {
    return (
        <Page pageName="create-bill">
          <AppBar/>
          <input type="text" placeholder="Title" onChange={this.changeTitle} value={this.state.bill.title} className="form-control"/>
          <Card>
            <div className="card-body">
              <div className="card-title">
                Participants ({this.state.bill.participants.length})
              </div>
              <ParticipantsSelect
                  onChange={this.changeParticipants}
                  participants={this.state.bill.participants}
              />
            </div>
          </Card>
          <Card>
            <div className="card-body">
              <div className="card-title">
                Add item
              </div>
              <AddItem bill={this.state.bill} onAdd={this.addItem}/>
            </div>
          </Card>
        </Page>
    );
  }

  private changeTitle(e: HtmlChangeEvent) {
    this.setState({
      bill: Object.assign(this.state.bill, {title: e.target.value})
    })
  }

  private changeParticipants(participants: Participant[]) {
    this.setState({
      bill: Object.assign(this.state.bill, {participants})
    })
  }

  private addItem(item: Item) {
    this.setState({
      bill: Object.assign(this.state.bill, {items: this.state.bill.items.concat([item])})
    })
  }
}

export const CreateBillPage = connect(
    null,
    (dispatch: Dispatch) => {
      return {
        changePage: (location: string) => dispatch(changePage(location))
      }
    }
)(CreateBillPageClass)