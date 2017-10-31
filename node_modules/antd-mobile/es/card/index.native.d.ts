/// <reference types="react" />
import React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import { ICardStyle } from './style/index.native';
import { CardProps } from './PropsType';
export interface ICardNativeProps extends CardProps {
    styles?: ICardStyle;
}
export default class Card extends React.Component<ICardNativeProps, any> {
    static defaultProps: {
        style: {};
        full: boolean;
        styles: any;
    };
    static Header: typeof CardHeader;
    static Body: typeof CardBody;
    static Footer: typeof CardFooter;
    render(): JSX.Element;
}
