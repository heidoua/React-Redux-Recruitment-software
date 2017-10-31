/// <reference types="react" />
import React from 'react';
import ITriggerProps from './Proptypes';
export interface IProptypes {
    visible: boolean;
    onTargetClick: () => void;
    onClose: () => void;
}
export default class Trigger extends React.Component<ITriggerProps & IProptypes, any> {
    static defaultProps: {
        prefixCls: string;
        getPopupClassNameFromAlign: () => string;
        getDocument: () => Document;
        onPopupVisibleChange: () => void;
        afterPopupVisibleChange: () => void;
        onPopupAlign: () => void;
        popupClassName: string;
        popupStyle: {};
        destroyPopupOnHide: boolean;
        popupAlign: {};
        defaultPopupVisible: boolean;
        mask: boolean;
        maskClosable: boolean;
    };
    touchOutsideHandler: any;
    popupRef: any;
    _component: any;
    _container: any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(): void;
    clearOutsideHandler(): void;
    onDocumentClick: (event: any) => void;
    getPopupDomNode(): any;
    getPopupAlign: () => any;
    getRootDomNode: () => Element;
    getPopupClassNameFromAlign: (align: any) => string;
    saveRef(el: any, visible: any): void;
    getComponent(visible: any): JSX.Element;
    close: () => void;
    onAnimateLeave: () => void;
    removeContainer: () => void;
    getContainer(): any;
    renderDialog(visible: any): void;
    render(): any[] | React.ReactElement<any>;
}
