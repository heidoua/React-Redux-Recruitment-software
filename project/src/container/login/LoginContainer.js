import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/Logo';
import { login } from '../../redux/user_redux';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

@connect(state=>state.user, {login})
class LoginContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: ''
        };
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    register = () => {
        this.props.history.push('/register');
    };

    handleLogin = () => {
        this.props.login(this.state);
    }

    render(){
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo/>
                {/*两翼留白*/}
                <WingBlank>
                    <List>
                        {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                        <InputItem
                            onChange={v=>this.handleChange('user', v)}
                        >用户</InputItem>
                        <WhiteSpace/>
                        <InputItem
                            type="password"
                            onChange={v=>this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button 
                        type="primary"
                        onClick={this.handleLogin}
                    >登录</Button>
                    {/*上下留白*/}
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    };
}

export default LoginContainer;