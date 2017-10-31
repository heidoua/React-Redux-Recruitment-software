/// <reference types="react" />
import React from 'react';
import { CardFooterProps as BasePropsType } from './PropsType';
export interface CardFooterProps extends BasePropsType {
    prefixCls?: string;
}
export default class CardFooter extends React.Component<CardFooterProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
