/// <reference types="react" />
import React from 'react';
import { CardHeaderProps as BasePropsType } from './PropsType';
export interface CardHeaderProps extends BasePropsType {
    styles?: any;
}
export default class CardHeader extends React.Component<CardHeaderProps, any> {
    static defaultProps: {
        thumbStyle: {};
        style: {};
    };
    render(): JSX.Element;
}
