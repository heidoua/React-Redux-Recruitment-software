import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';

@connect(
    state=>state
)
class Auth extends Component{
    render(){
        return  <h2>Auth page</h2>
    };
}

export default Auth;