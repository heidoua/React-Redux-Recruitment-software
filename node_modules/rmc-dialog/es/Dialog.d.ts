/// <reference types="react" />
import React from 'react';
import IDialogPropTypes from './IDialogPropTypes';
export default class Dialog extends React.Component<IDialogPropTypes, any> {
    static defaultProps: {
        afterClose: () => void;
        className: string;
        mask: boolean;
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        prefixCls: string;
        onClose: () => void;
    };
    dialogRef: any;
    bodyRef: any;
    headerRef: any;
    footerRef: any;
    wrapRef: any;
    componentWillUnmount(): void;
    getZIndexStyle(): any;
    getWrapStyle(): any;
    getMaskStyle(): any;
    getMaskTransitionName(): string | undefined;
    getTransitionName(): string | undefined;
    getMaskElement(): any;
    getDialogElement: () => JSX.Element;
    onAnimateAppear: () => void;
    onAnimateLeave: () => void;
    close: (e: any) => void;
    onMaskClick: (e: any) => void;
    render(): JSX.Element;
}
