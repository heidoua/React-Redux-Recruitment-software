import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem} from 'antd-mobile';
import AvatarSelector from '../../component/avatar_selector/AvatarSelector';
class BossInfoContainer extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            title: ''
        };
    }
    
    onChange(key, val){
        this.setState({
            [key]: val
        });
    }

    render(){
        return (
            <div>
                <NavBar
                mode="dark"
            >Boss完善信息页</NavBar>
            <AvatarSelector />
            <InputItem
                onChange={v=>this.onChange('title', v)}
            >
                招聘职位
            </InputItem>
            <InputItem
                onChange={v=>this.onChange('title', v)}
            >
                公司名称
            </InputItem>
            <InputItem
                onChange={v=>this.onChange('title', v)}
            >
                职位薪资
            </InputItem>
            <TextareaItem
                rows={3}
                autoHeight
                title="招聘要求"
                onChange={v=>this.onChange('title', v)}
            >
            </TextareaItem>
            </div>
        );
    };
}

export default BossInfoContainer;