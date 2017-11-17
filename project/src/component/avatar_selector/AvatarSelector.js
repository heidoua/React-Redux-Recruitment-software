import React from 'react';
import PropTypes from 'prop-types';

import { Grid, List } from 'antd-mobile';

const state = {
    icon: ''
};

const avatarList = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map(item => ({
    icon:require(`../img/${item}.png`),
    text:item
}));

const gridHeader = () => (state.icon ? <div>
    <span>已选择头像</span>
    <img style={{width:20}} src={state.icon} alt=""/>
</div> : '请选择头像');

const AvatarSelector = ({ selectAvatar }) => (
    <div>
        <List renderHeader={gridHeader} className="my-list">
            <Grid 
                columnNum={5}
                data={avatarList} 
                onClick={ele=>{
                    state.icon=ele.icon;
                    selectAvatar(ele.text);
                }}
            />
        </List>
    </div>
);

AvatarSelector.PropTypes = {
    selectAvatar: PropTypes.func.isRequired,
};

export default AvatarSelector;