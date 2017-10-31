/// <reference types="react" />
import React from 'react';
import { CheckboxItemProps as BasePropsType } from './PropsType';
export interface CheckboxItemProps extends BasePropsType {
    listPrefixCls?: any;
    prefixCls?: string;
    className?: string;
    name?: string;
    wrapLabel?: boolean;
}
export default class CheckboxItem extends React.Component<CheckboxItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
        checkboxProps: {};
    };
    render(): JSX.Element;
}
