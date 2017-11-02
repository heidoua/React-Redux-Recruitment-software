import './config';
import React from 'react'
import thunk from 'redux-thunk'
import reducers from './reducer'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import 'antd-mobile/dist/antd-mobile.css';
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDom.render(
	(<Provider store={store}>
		<BrowserRouter>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)