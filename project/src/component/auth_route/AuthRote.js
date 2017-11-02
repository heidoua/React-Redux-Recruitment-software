 import React, { Component } from 'react';
 import axios from 'axios';
 
 class AuthRoute extends Component{
     componentDidMount(){
        // 获取用户信息
        // axios.get('/user/info');
     }

     render(){
         return <h2>验证用户</h2>
     };
 }

 export default AuthRoute;