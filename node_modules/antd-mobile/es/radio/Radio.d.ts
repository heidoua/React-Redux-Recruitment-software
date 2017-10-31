/// <reference types="react" />
import React from 'react';
import { RadioProps as BasePropsType } from './PropsType';
export interface RadioProps extends BasePropsType {
    prefixCls?: string;
    listPrefixCls?: string;
    className?: string;
}
export default class Radio extends React.Component<RadioProps, any> {
    static RadioItem: any;
    static defaultProps: {
        prefixCls: string;
        wrapLabel: boolean;
    };
    render(): JSX.Element;
}
