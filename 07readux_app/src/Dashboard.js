import React, { Component } from 'react';
import { Link, Route,  } from 'react-router-dom';
import App from './App';

const UserName = () => (<div>房飞跃</div>);
const UserAge = () => (<div>27</div>);

class Dashboard extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/dashboard/'>简介</Link></li>
                    <li><Link to='/dashboard/name'>姓名</Link></li>
                    <li><Link to='/dashboard/age'>年龄</Link></li>
                </ul>
                <Route path='/dashboard/' exact component={App}></Route>
                <Route path='/dashboard/name' component={UserName}></Route>
                <Route path='/dashboard/age' component={UserAge}></Route>
            </div>
        )
    };
}

export default Dashboard;