import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getUserData } from './Auth.redux';
import { Redirect } from 'react-router-dom'; 

@connect(state=>state.auth, { login, getUserData })
class Auth extends Component{
    
    componentDidMount() {
        this.props.getUserData();
    }
    
    render(){
        return (
            <div>
                <h2>我的名字是{this.props.name},类型{this.props.type}</h2>
                {this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null}
                <h2>你还没有权限，请先登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        );
    };
}

export default Auth;