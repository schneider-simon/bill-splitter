import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './styles/app.scss';
import store, {history} from './store';
import registerServiceWorker from './registerServiceWorker';
import {App} from "./App";
import {ConnectedRouter} from "react-router-redux";

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();