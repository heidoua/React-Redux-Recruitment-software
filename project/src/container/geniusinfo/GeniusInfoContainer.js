import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { update } from '../../redux/user_redux';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar_selector/AvatarSelector';
@connect(
    state=>state.user,
    { update }
)
class GeniusInfoContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
			desc: '',
            title: ''
        };
    }

    onChange = (key, val) => {
        this.setState({
            [key]: val
        });
    }

    selectAvatar = (imgname)=>{
        this.setState({
            avatar: imgname
        });
    }

    render(){
        const redirect = this.props.redirectTo;
        const path = this.props.location.pathname;

        return (
            <div>
                {redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect> : null}
                <NavBar
                    mode="dark"
                >
                    牛人完善信息页
                </NavBar>
                <AvatarSelector 
                    selectAvatar={this.selectAvatar}
                />
                <InputItem
                    onChange={v=>this.onChange('title', v)}
                >
                    求职岗位
                </InputItem>
                <TextareaItem
                    rows={3}
                    autoHeight
                    title="个人简介"
                    onChange={v=>this.onChange('desc', v)}
                >
                </TextareaItem>
                <Button 
                    type="primary"
                    onClick={() =>this.props.update(this.state)}    
                >保存</Button>
            </div>
        );
    };
}

export default GeniusInfoContainer;