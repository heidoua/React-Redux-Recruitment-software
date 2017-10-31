/// <reference types="react" />
import React from 'react';
export declare class KeyboardItem extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        onClick: () => void;
        disabled: boolean;
    };
    render(): JSX.Element;
}
declare class CustomKeyboard extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
    };
    linkedInput: any;
    antmKeyboard: any;
    confirmDisabled: boolean;
    confirmKeyboardItem: any;
    onKeyboardClick: (e: any, value: any) => null | undefined;
    renderKeyboardItem: (item: any, index: any) => JSX.Element;
    render(): JSX.Element;
}
export default CustomKeyboard;
