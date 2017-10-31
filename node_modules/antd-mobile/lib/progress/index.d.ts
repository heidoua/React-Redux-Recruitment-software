/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface ProgressProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class Progress extends React.Component<ProgressProps, any> {
    static defaultProps: {
        prefixCls: string;
        percent: number;
        position: string;
        unfilled: boolean;
        appearTransition: boolean;
    };
    barRef: any;
    private noAppearTransition;
    componentWillReceiveProps(): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
