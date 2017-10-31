/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface RangeProps extends BasePropsType {
    prefixCls?: string;
    handleStyle?: React.CSSProperties[];
    trackStyle?: React.CSSProperties[];
    railStyle?: React.CSSProperties;
}
export default class Range extends React.Component<RangeProps, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
