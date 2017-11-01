import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch  } from 'react-router-dom';
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

class TestRouterParam extends Component{
    render(){
        console.log(this.props);
        return <div>NOT FOUND 404</div>
    };
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to='/'>test1</Link></li>
                    <li><Link to='/test2'>test2</Link></li>
                    <li><Link to='/test3'>test3</ Link></li>
                </ul>
                <Switch>
                {/*只渲染第一次命中的,可用于处理一些特殊页面，比如404*/}
                    <Route path='/' exact component={App}></Route>
                    <Route path='/test2' component={TestRouter2}></Route>
                    <Route path='/test3' component={TestRouter3}></Route>
                    <Route path='/:location' component={TestRouterParam}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);