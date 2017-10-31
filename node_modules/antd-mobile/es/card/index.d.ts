/// <reference types="react" />
import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps as BasePropsType } from './PropsType';
export interface CardProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class Card extends React.Component<CardProps, any> {
    static defaultProps: {
        prefixCls: string;
        full: boolean;
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
