/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface InputItemProps extends BasePropsType {
    last?: boolean;
}
export default class InputItem extends React.Component<InputItemProps, any> {
    static defaultProps: {
        type: string;
        editable: boolean;
        clear: boolean;
        onChange: any;
        onBlur: any;
        onFocus: any;
        extra: string;
        onExtraClick: any;
        error: boolean;
        onErrorClick: any;
        size: string;
        labelNumber: number;
        labelPosition: string;
        textAlign: string;
        last: boolean;
        styles: any;
    };
    inputRef: any;
    onChange: (text: any) => void;
    onInputBlur: () => void;
    onInputFocus: () => void;
    render(): JSX.Element;
}
