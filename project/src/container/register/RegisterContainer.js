import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/Logo';
import { register } from '../../redux/user_redux';
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile';

@connect(state=>state.user, {register})
class RegisterContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            user: '',
            pwd: '',
            repeatPwd: '',
            type: 'genius'
        };
    }

    // 赋值
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    // 注册 
    handleRegister = () => {
        this.props.register(this.state);
    }; 

    render(){
        const RadioItem = Radio.RadioItem;
        return(
            <div>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <Logo/>
                <List>
                    {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
                    <InputItem
                        onChange={v=>this.handleChange('user', v)}
                    >用户名</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange('pwd', v)}
                    >密码</InputItem>
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        onChange={v=>this.handleChange('repeatPwd', v)}
                    >确认密码</InputItem>
                    <WhiteSpace/>
                    <RadioItem
                        checked={this.state.type === 'genius'}
                        onChange={()=>this.handleChange('type', 'genius')}
                    >
                        牛人
                    </RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={()=>this.handleChange('type', 'boss')}
                    >
                        BOSS 
                    </RadioItem>
                    <WhiteSpace/>
                    <Button 
                        type="primary"
                        onClick={this.handleRegister}
                    >
                        注册
                    </Button>
                </List>
            </div>
        );
    };
}

export default RegisterContainer;