import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Page} from "../page/Page";
import {RouterAction} from "react-router-redux";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {changePage} from "../../../state/actions/routing_actions";
import AppBar from "material-ui/AppBar";
import Card, {CardActions, CardText} from "material-ui/Card";
import List, {ListItem} from "material-ui/List";
import {ActionSupervisorAccount} from "material-ui/svg-icons";
import {Subheader} from "material-ui";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

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
          <AppBar
              title="Bill splitter"
          />
          <Card>
            <CardActions>
              <RaisedButton onClick={this.goToCreateBill} label="Add Bill" primary={true}/>
            </CardActions>
          </Card>
          <FloatingActionButton className="fab" onClick={this.goToCreateBill}>
            <ContentAdd/>
          </FloatingActionButton>
          <Subheader>Recent bills</Subheader>
          <Card>
            <CardText>
              <List>
                <ListItem primaryText="Bill 1" leftIcon={<ActionSupervisorAccount/>}/>
                <ListItem primaryText="Bill 2" leftIcon={<ActionSupervisorAccount/>}/>
                <ListItem primaryText="Bill 3" leftIcon={<ActionSupervisorAccount/>}/>
                <ListItem primaryText="Bill 4" leftIcon={<ActionSupervisorAccount/>}/>
              </List>
            </CardText>
          </Card>
        </Page>
    );
  }

  private goToCreateBill() {
    this.props.changePage('/create-bill')
  }
}

export const StartPage = connect(
    null,
    (dispatch: Dispatch) => {
      return {
        changePage: (location: string) => dispatch(changePage(location))
      }
    }
)(StartPageClass)