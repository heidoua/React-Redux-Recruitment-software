/// <reference types="react" />
import React from 'react';
import { IToastStyle } from './style/index.native';
export interface ToastProps {
    content: string;
    duration?: number;
    onClose?: () => void;
    mask?: boolean;
    type?: string;
    onAnimationEnd?: () => void;
    styles?: IToastStyle;
}
export default class ToastContainer extends React.Component<ToastProps, any> {
    static defaultProps: {
        duration: number;
        mask: boolean;
        onClose(): void;
        styles: any;
    };
    anim: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
