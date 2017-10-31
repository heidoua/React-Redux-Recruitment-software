/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface WhiteSpaceProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
    };
    render(): JSX.Element;
}
