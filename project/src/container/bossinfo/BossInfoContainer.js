import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../../component/avatar_selector/AvatarSelector';
class BossInfoContainer extends Component{
 
    constructor(props){
        super(props);

        this.state = {
			desc:'',
            title:'',
			money:'',
			company:'',
        };
    }
    
    onChange(key, val){
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
        return (
            <div>
                <NavBar
                mode="dark"
            >Boss完善信息页</NavBar>
            <AvatarSelector 
                selectAvatar={this.selectAvatar}
            />
            <InputItem
                onChange={v=>this.onChange('title', v)}
            >
                招聘职位
            </InputItem>
            <InputItem
                onChange={v=>this.onChange('company', v)}
            >
                公司名称
            </InputItem>
            <InputItem
                onChange={v=>this.onChange('money', v)}
            >
                职位薪资
            </InputItem>
            <TextareaItem
                rows={3}
                autoHeight
                title="招聘要求"
                onChange={v=>this.onChange('desc', v)}
            >
            </TextareaItem>
            <Button type="primary">保存</Button>
            </div>
        );
    };
}

export default BossInfoContainer;