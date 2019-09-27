import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes.js';
import { Provider } from 'react-redux';
import rootReducer from './common/reducers/index';
import { createStore } from 'redux';
import 'babel-polyfill'

const store = createStore(rootReducer);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    // <div className="container">{routes}</div>,
    <Provider store={store}>{routes}</Provider>,
    document.getElementById('root'));
// registerServiceWorker();


// ReactDOM.render()