import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import './index.css';
import store from './redux/store/index';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
store.subscribe(() => {
    console.log(store.getState());
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
