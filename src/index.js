import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import App from './App';
import { counter } from './index.redux';

const store = createStore(counter);

const render = () => { 
    ReactDOM.render(<App store={store}/>, document.getElementById('root'));
};

render();

store.subscribe(render);