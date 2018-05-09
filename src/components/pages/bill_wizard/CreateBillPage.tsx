import * as React from 'react';
import {Page} from '../page/Page';
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {changePage} from "../../../state/actions/routing_actions";
import {RouterAction} from "react-router-redux";

export interface CreateBillPageProps {
  changePage: (location: string) => RouterAction
}

export interface CreateBillPageState {

}

class CreateBillPageClass extends React.Component<CreateBillPageProps, CreateBillPageState> {
  constructor(props: CreateBillPageProps) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
        <Page pageName="create-bill">
          Create Bill Page
          <button onClick={() => this.props.changePage('/')}>Go to start</button>
        </Page>
    );
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