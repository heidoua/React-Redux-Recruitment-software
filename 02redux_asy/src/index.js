import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { thunk } from 'redux-thunk';
import App from './App';
import { counter, increase, decrease, increaseAsy } from './index.redux';

const store = createStore(counter, applyMiddleware(thunk));

const render = () => { 
    ReactDOM.render(<App store={store} increase={increase} decrease={decrease} increaseAsy={increaseAsy}/>, document.getElementById('root'));
};

render();

store.subscribe(render);