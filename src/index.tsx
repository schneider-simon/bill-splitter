import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import './styles/app.scss';
import store, {history} from './store';
import registerServiceWorker from './registerServiceWorker';
//import {App} from "./App";
import {constants} from "./constants/constants";
import {CreateBillPage} from "./components/pages/bill_wizard/CreateBillPage";
import {StartPage} from "./components/pages/start_page/StartPage";
import {Route, Switch} from "react-router";

const url = ""

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact={true} path={`${url}/`} component={StartPage}/>
          <Route path={`${url}/${constants.PATHS.CREATE_BILL}`} component={CreateBillPage}/>
        </Switch>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();