import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import { counter}  from './index.redux';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

const TestRouter2 = () => (
    <div>TestRouter2</div>
);
const TestRouter3 = () => (
    <div>TestRouter3</div>
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/'>test1</Link></li>
                    <li><Link to='/test2'>test2</Link></li>
                    <li><Link to='/test3'>test3</ Link></li>
                </ul>
                <Route path='/' exact component={App}></Route>
                <Route path='/test2' component={TestRouter2}></Route>
                <Route path='/test3' component={TestRouter3}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);