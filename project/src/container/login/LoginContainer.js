import React, { Component } from 'react';
import Logo from '../../component/logo/Logo';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';

class LoginContainer extends Component{

    register = () => {
        this.props.history.push('/register');
    };

    render(){
        return(
            <div>
                <Logo/>
                {/*两翼留白*/}
                <WingBlank>
                    <List>
                        <InputItem>用户</InputItem>
                        <WhiteSpace/>
                        <InputItem>密码</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary">登录</Button>
                    {/*上下留白*/}
                    <WhiteSpace/>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        );
    };
}

export default LoginContainer;