/// <reference types="react" />
import React from 'react';
import ITriggerProps from './Proptypes';
declare class TriggerWrap extends React.Component<ITriggerProps, any> {
    static displayName: string;
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
    triggerRef: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    setPopupVisible(visible: any): void;
    onTargetClick: () => void;
    onClose: () => void;
    render(): JSX.Element;
}
export default TriggerWrap;
