import * as React from 'react';
import './styles/app.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BasePage} from "./components/pages/base_page/BasePage";
import {RouteComponentProps, withRouter} from "react-router";

interface AppProps extends RouteComponentProps<any> {
}

class AppClass extends React.Component<AppProps> {
  public render() {
    console.log(this.props)

    return (
        <div className="App">
          <MuiThemeProvider>
            <BasePage/>
          </MuiThemeProvider>
        </div>
    );
  }
}

export const App = withRouter(AppClass)