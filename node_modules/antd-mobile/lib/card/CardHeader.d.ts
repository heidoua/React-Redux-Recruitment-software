/// <reference types="react" />
import React from 'react';
import { CardHeaderProps as BasePropsType } from './PropsType';
export interface CardHeaderProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class CardHeader extends React.Component<CardHeaderProps, any> {
    static defaultProps: {
        prefixCls: string;
        thumbStyle: {};
    };
    render(): JSX.Element;
}
