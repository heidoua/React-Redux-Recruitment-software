import './config';
import './index.css';
import React from 'react'
import thunk from 'redux-thunk'
import reducers from './reducer'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

// container
import AuthRoute from './component/auth_route/AuthRote';
import DashBoard from './component/dashboard/DashBoard';
import LoginContainer from './container/login/LoginContainer';
import RegisterContainer from './container/register/RegisterContainer';
import BossInfoContainer from './container/bossinfo/BossInfoContainer';
import GeniusInfoContainer from './container/geniusinfo/GeniusInfoContainer';


const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
));

function Boss(){
	return <h1>Boss页面</h1>
}

ReactDom.render(
	(<Provider store={store}> 
		<BrowserRouter>
			<div>
				<AuthRoute></AuthRoute>
				<Switch>
					<Route path="/bossinfo" component={BossInfoContainer}></Route>
					<Route path="/geniusinfo" component={GeniusInfoContainer}></Route>
					<Route path='/login' component={LoginContainer}></Route>
					<Route path='/register' component={RegisterContainer}></Route>
					<Route component={DashBoard}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)