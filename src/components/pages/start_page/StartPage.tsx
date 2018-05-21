import * as React from 'react';
import {Page} from "../page/Page";
import {RouterAction} from "react-router-redux";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {changePage} from "../../../state/actions/routing_actions";
import {Card} from "../../partials/card/Card";
import {AppBar} from "../../partials/app_bar/AppBar";

export interface StartPageProps {
  changePage: (location: string) => RouterAction
}

export interface StartPageState {

}

class StartPageClass extends React.Component<StartPageProps, StartPageState> {
  constructor(props: StartPageProps) {
    super(props)

    this.state = {}
    this.goToCreateBill = this.goToCreateBill.bind(this)
  }


  public render() {
    return (
        <Page pageName={"start"}>
          <AppBar/>
          <Card>
            <div onClick={this.goToCreateBill} className="btn btn-primary">
              Add Bill
            </div>
          </Card>
          <Card>
            <div className="card-body">
              <div className="card-title">
                Recent bills
              </div>
              <ul>
                <li>Bill 1</li>
                <li>Bill 2</li>
                <li>Bill 3</li>
              </ul>
            </div>
          </Card>
        </Page>
    );
  }

  private goToCreateBill() {
    this.props.changePage('/create-bill')
  }
}

export const StartPage = compose(
    connect(
        null,
        (dispatch: Dispatch) => {
          return {
            changePage: (location: string) => dispatch(changePage(location))
          }
        }
    )
)(StartPageClass)