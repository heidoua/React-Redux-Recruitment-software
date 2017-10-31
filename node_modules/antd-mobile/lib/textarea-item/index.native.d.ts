/// <reference types="react" />
import React from 'react';
import TextAreaItemProps from './PropsType';
import { ITextareaItemStyle } from './style/index.native';
export interface ITextareaItemNativeProps extends TextAreaItemProps {
    last?: boolean;
    keyboardType?: string;
    onContentSizeChange?: (e: any) => void;
    styles?: ITextareaItemStyle;
}
export default class TextAreaItem extends React.Component<ITextareaItemNativeProps, any> {
    static defaultProps: {
        onChange(): void;
        onFocus(): void;
        onBlur(): void;
        onErrorClick(): void;
        clear: boolean;
        error: boolean;
        editable: boolean;
        rows: number;
        count: number;
        keyboardType: string;
        autoHeight: boolean;
        last: boolean;
        styles: any;
    };
    constructor(props: any);
    onChange: (event: any) => void;
    onContentSizeChange: (event: any) => void;
    render(): JSX.Element;
}
