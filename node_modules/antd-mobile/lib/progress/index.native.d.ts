/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface ProgressProps extends BasePropsType {
    wrapWidth?: number;
    styles?: any;
}
export default class Progress extends React.Component<ProgressProps, any> {
    static defaultProps: {
        percent: number;
        position: string;
        unfilled: boolean;
        appearTransition: boolean;
        styles: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    onLayout: (e: any) => void;
    normalPercent: (percent: any) => any;
    getWidth: (percent?: number | undefined) => number;
    render(): JSX.Element;
}
