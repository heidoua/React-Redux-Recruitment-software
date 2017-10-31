/// <reference types="react" />
import React from 'react';
import { FlexProps as BasePropsType } from './PropsType';
export interface FlexProps extends BasePropsType {
    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
    onClick?: () => void;
    prefixCls?: string;
    className?: string;
    role?: string;
}
export default class Flex extends React.Component<FlexProps, any> {
    static Item: any;
    static defaultProps: {
        prefixCls: string;
        align: string;
    };
    render(): JSX.Element;
}
