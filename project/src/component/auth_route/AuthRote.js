 import React, { Component } from 'react';
 import axios from 'axios';

 import { withRouter } from 'react-router-dom';
 import { loadData } from '../../redux/user_redux';
 import { connect } from 'react-redux';
 @withRouter
 @connect(
     null,
     {loadData}
 )
 class AuthRoute extends Component{
     componentDidMount(){
         const publicList = ['/login', '/register']; 
         const pathname = this.props.location.pathname; 

         if (publicList.indexOf(pathname) > -1){
            return null ;
         }

        // 获取用户信息
        axios.get('/user/info').then(res => {
            if (res.status === 200){
                if (res.data.code === 0){
                    // 登录了
                    this.props.loadData(res.data.data);
                }else{ // 没有登录
                    this.props.history.push('./login');
                }
                console.log(res.data);
            }
        });
     }

     render(){
         return null;
     };
 }

 export default AuthRoute;