/// <reference types="react" />
import React from 'react';
import { FlexItemProps as BasePropsType } from './PropsType';
export interface FlexItemProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class FlexItem extends React.Component<FlexItemProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
