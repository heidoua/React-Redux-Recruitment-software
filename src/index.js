import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import { counter, increase, decrease } from './index.redux';

const store = createStore(counter);

const render = () => { 
    ReactDOM.render(<App store={store} increase={increase} decrease={decrease}/>, document.getElementById('root'));
};

render();

store.subscribe(render);