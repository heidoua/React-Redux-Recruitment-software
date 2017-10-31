/// <reference types="react" />
import React from 'react';
import { IModalStyle } from './style/index.native';
import { ModalProps } from './PropsType';
export interface IModalNativeProps extends ModalProps {
    styles?: IModalStyle;
}
declare class AntmModal extends React.Component<IModalNativeProps, any> {
    static defaultProps: {
        visible: boolean;
        closable: boolean;
        maskClosable: boolean;
        style: {};
        bodyStyle: {};
        animationType: string;
        onClose(): void;
        footer: never[];
        transparent: boolean;
        popup: boolean;
        animateAppear: boolean;
        styles: any;
        operation: boolean;
    };
    static alert: any;
    static operation: any;
    static prompt: any;
    root: any;
    onFooterLayout: (e: any) => void;
    saveRoot: (root: any) => void;
    render(): JSX.Element;
}
export default AntmModal;
