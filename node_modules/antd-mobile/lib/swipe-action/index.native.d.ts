/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface SwipeActionProps extends BasePropsType {
    styles?: any;
}
declare class SwipeAction extends React.Component<SwipeActionProps, any> {
    render(): JSX.Element;
}
export default SwipeAction;
