 import React, { Component } from 'react';
 import axios from 'axios';

 import { withRouter } from 'react-router-dom';
 @withRouter
 class AuthRoute extends Component{
     componentDidMount(){
        // 获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status === 200){
                if (res.data.code == '0'){
                    // 登录了
                }else{ // 没有登录
                    console.log('this.props.history', this.props.history);
                }
                 console.log(res.data);
            }
        });
     }

     render(){
         return <h2>验证用户</h2>
     };
 }

 export default AuthRoute;