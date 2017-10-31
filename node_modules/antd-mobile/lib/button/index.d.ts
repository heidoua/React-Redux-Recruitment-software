/// <reference types="react" />
import React from 'react';
import { ButtonProps as BasePropsType } from './PropsType';
export interface ButtonProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
    role?: string;
    inline?: boolean;
    icon?: string;
    activeClassName?: string;
}
declare class Button extends React.Component<ButtonProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
        inline: boolean;
        disabled: boolean;
        loading: boolean;
        activeStyle: {};
    };
    render(): JSX.Element;
}
export default Button;
