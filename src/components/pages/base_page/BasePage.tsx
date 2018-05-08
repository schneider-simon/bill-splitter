import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {StartPage} from "../start_page/StartPage";
import {Route, RouteComponentProps, Switch, withRouter} from "react-router";
import {constants} from "../../../constants/constants";
import {CreateBillPage} from "../bill_wizard/CreateBillPage";

export interface BasePageProps extends RouteComponentProps<any> {

}

export interface BasePageState {

}

class BasePageClass extends React.Component<BasePageProps, BasePageState> {
  constructor(props: BasePageProps) {
    super(props)

    this.state = {}
  }

  public render() {
    //const url = this.props.match.url

    return (
        <div>
          <AppBar
              title="Bill splitter"
          />

        </div>
    );
  }
}

export const BasePage = withRouter(BasePageClass)