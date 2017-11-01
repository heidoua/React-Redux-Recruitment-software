import React, { Component } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import App from './App';
import { connect } from 'react-redux';
import { logout } from './Auth.redux';

const UserName = () => (<div>房飞跃</div>);
const UserAge = () => (<div>27</div>);

@connect(state=>state.auth, { logout })
class Dashboard extends Component{
    render(){ 
        const { match } = this.props;
        console.log(match);
        const redirectToLogin = <Redirect to='/login'></Redirect>;
        const app = (
            <div>
                {this.props.isAuth?<button onClick={this.props.logout}>注销</button>:null}
                <ul>
                    <li><Link to={`${match.url}/`}>简介</Link></li>
                    <li><Link to={`${match.url}/name`}>姓名</Link></li>
                    <li><Link to={`${match.url}/age`}>年龄</Link></li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/name`} component={UserName}></Route>
                <Route path={`${match.url}/age`} component={UserAge}></Route>
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin
    };
}

export default Dashboard;