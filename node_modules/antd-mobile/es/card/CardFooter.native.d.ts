/// <reference types="react" />
import React from 'react';
import { CardFooterProps as BasePropsType } from './PropsType';
export interface CardFooterProps extends BasePropsType {
    styles?: any;
}
export default class CardFooter extends React.Component<CardFooterProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
