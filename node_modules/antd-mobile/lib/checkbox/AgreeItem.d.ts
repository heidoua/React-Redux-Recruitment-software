/// <reference types="react" />
import React from 'react';
import { AgreeItemPropsType as BasePropsType } from './PropsType';
export interface AgreeItemPropsType extends BasePropsType {
    prefixCls?: string;
    className?: string;
    name?: string;
    wrapLabel?: boolean;
}
export default class AgreeItem extends React.Component<AgreeItemPropsType, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
