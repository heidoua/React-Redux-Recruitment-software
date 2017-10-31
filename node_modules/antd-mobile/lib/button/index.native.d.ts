/// <reference types="react" />
import React from 'react';
import buttonStyle from './style/index.native';
import { ButtonProps as BasePropsType } from './PropsType';
export interface ButtonProps extends BasePropsType {
    onPressIn?: (x?: any) => void;
    onPressOut?: (x?: any) => void;
    onShowUnderlay?: (x?: any) => void;
    onHideUnderlay?: (x?: any) => void;
    styles?: typeof buttonStyle;
}
export default class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        pressIn: boolean;
        disabled: boolean;
        activeStyle: {};
        loading: boolean;
        onClick: (_x?: any) => void;
        onPressIn: (_x?: any) => void;
        onPressOut: (_x?: any) => void;
        onShowUnderlay: (_x?: any) => void;
        onHideUnderlay: (_x?: any) => void;
        styles: any;
    };
    constructor(props: any);
    onPressIn: (...arg: any[]) => void;
    onPressOut: (...arg: any[]) => void;
    onShowUnderlay: (...arg: any[]) => void;
    onHideUnderlay: (...arg: any[]) => void;
    render(): JSX.Element;
}
