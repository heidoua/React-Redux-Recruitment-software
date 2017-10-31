/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface WingBlankProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class WingBlank extends React.Component<WingBlankProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
    };
    render(): JSX.Element;
}
