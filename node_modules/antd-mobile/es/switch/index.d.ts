/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface SwitchProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
    platform?: string;
}
export default class Switch extends React.Component<SwitchProps, any> {
    static defaultProps: {
        prefixCls: string;
        name: string;
        checked: boolean;
        disabled: boolean;
        onChange(): void;
        platform: string;
        onClick(): void;
    };
    onChange: (e: any) => void;
    onClick: (e: any) => void;
    render(): JSX.Element;
}
