import { NavBar } from 'antd-mobile'; 
import { connect } from 'react-redux';
import React, { Component } from 'react';

function Boss(){
    return <div>boss</div>
}
function Genius(){
    return <div>genius</div>
}
function Msg(){
    return <div>msg</div>
}
function User(){
    return <div>user</div>
}
@connect(
    state=>state
)
class DashBoard extends Component{
    render(){
        const { pathname } = this.props.location;

        const user = this.props.user;
        const navList = [
            {
                path     : '/boss',
                text     : '牛人',
                icon     : 'boss',
                title    : '牛人列表',
                component: Boss,
                hide: user.type=='genius'
            },
            {
                path     : '/genius',
                text     : 'Boss',
                icon     : 'job',
                title    : '牛人列表',
                component: Genius,
                hide: user.type=='boss'
            },
            {
                path     : '/msg',
                text     : '消息',
                icon     : 'msg',
                title    : '牛人列表',
                component: Msg
            },
            {
                path     : '/me',
                text     : '我',
                icon     : 'user',
                title    : '个人中心',
                component: User
            },
        ];

        return (
            <div>
                <NavBar
                    mode="dark"
                >
                    {navList.find(v=>v.path==pathname).title}
                </NavBar>
            </div>
        );
    };
}

export default DashBoard;