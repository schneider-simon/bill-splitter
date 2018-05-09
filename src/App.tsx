import * as React from 'react';
import './styles/app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, Switch, RouteComponentProps, withRouter} from "react-router";
import {constants} from "./constants/constants";
import {CreateBillPage} from "./components/pages/bill_wizard/CreateBillPage";
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {StartPage} from "./components/pages/start_page/StartPage";

interface AppProps extends RouteComponentProps<any> {
}

class AppClass extends React.Component<AppProps> {
  public render() {
    const timeout = 500
    const currentKey = this.props.location.key

    return (
        <div className="app">
          <MuiThemeProvider>
            <TransitionGroup>
              <CSSTransition
                  key={currentKey}
                  classNames="fade-forward"
                  timeout={timeout}
              >
                <Switch location={this.props.location}>
                  <Route exact={true} path='/' component={StartPage}/>
                  <Route path={`/${constants.PATHS.CREATE_BILL}`} component={CreateBillPage}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </MuiThemeProvider>
        </div>
    );
  }
}

export const App = withRouter(AppClass)