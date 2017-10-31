/// <reference types="react" />
import React from 'react';
import { IPromptStyle } from './style/prompt.native';
export declare type ButtonType = {
    text: string;
    onPress?: () => void;
    style?: any;
};
export interface PropmptContainerProps {
    title: string;
    type?: 'default' | 'login-password' | 'secure-text';
    message?: string | null;
    defaultValue?: string;
    actions: Array<ButtonType>;
    onAnimationEnd?: (visible: boolean) => void;
    styles?: IPromptStyle;
    placeholders?: string[];
}
export default class PropmptContainer extends React.Component<PropmptContainerProps, any> {
    static defaultProps: {
        type: string;
        defaultValue: string;
        styles: any;
    };
    constructor(props: any);
    onClose: () => void;
    onChangeText(type: any, value: any): void;
    render(): JSX.Element;
}
