/// <reference types="react" />
import React from 'react';
import { AgreeItemPropsType } from './PropsType';
import { ICheckboxStyle } from './style/index.native';
export interface IAgreeItemNativeProps extends AgreeItemPropsType {
    styles?: ICheckboxStyle;
    checkboxStyle?: any;
}
export default class AgreeItem extends React.Component<IAgreeItemNativeProps, any> {
    static defaultProps: {
        styles: any;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
