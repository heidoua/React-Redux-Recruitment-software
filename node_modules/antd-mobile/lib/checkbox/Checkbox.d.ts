/// <reference types="react" />
import React from 'react';
import { CheckboxProps as BasePropsType } from './PropsType';
export interface CheckboxProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
    name?: string;
    wrapLabel?: boolean;
}
export default class Checkbox extends React.Component<CheckboxProps, any> {
    static CheckboxItem: any;
    static AgreeItem: any;
    static defaultProps: {
        prefixCls: string;
        wrapLabel: boolean;
    };
    render(): JSX.Element;
}
