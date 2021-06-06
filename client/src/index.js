import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from "redux";
import vacationsReducer from "./state/vacationsReducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

var store = createStore(vacationsReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

