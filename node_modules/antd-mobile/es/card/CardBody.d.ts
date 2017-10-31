/// <reference types="react" />
import React from 'react';
import { CardBodyProps as BasePropsType } from './PropsType';
export interface CardBodyProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class CardBody extends React.Component<CardBodyProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
