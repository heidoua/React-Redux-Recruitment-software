/// <reference types="react" />
import React from 'react';
import { CardBodyProps as BasePropsType } from './PropsType';
export interface CardBodyProps extends BasePropsType {
    styles?: any;
}
export default class CardBody extends React.Component<CardBodyProps, any> {
    static defaultProps: {
        style: {};
    };
    render(): JSX.Element;
}
