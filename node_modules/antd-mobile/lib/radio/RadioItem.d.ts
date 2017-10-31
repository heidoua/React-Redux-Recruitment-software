/// <reference types="react" />
import React from 'react';
import { RadioItemProps as BasePropsType } from './PropsType';
export interface RadioItemProps extends BasePropsType {
    prefixCls?: string;
    listPrefixCls?: string;
    className?: string;
}
export default class RadioItem extends React.Component<RadioItemProps, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
        radioProps: {};
    };
    render(): JSX.Element;
}
