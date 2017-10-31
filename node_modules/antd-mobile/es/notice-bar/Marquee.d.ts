/// <reference types="react" />
import React from 'react';
export interface IMarqueeProps {
    prefixCls?: string;
    text: string;
    loop?: boolean;
    leading?: number;
    trailing?: number;
    className?: string;
    fps?: number;
    style?: any;
}
export default class Marquee extends React.Component<IMarqueeProps, any> {
    static defaultProps: {
        text: string;
        loop: boolean;
        leading: number;
        trailing: number;
        fps: number;
        className: string;
    };
    state: {
        animatedWidth: number;
        overflowWidth: number;
    };
    textRef: any;
    private _marqueeTimer;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    _startAnimation(): void;
    _measureText(): void;
}
