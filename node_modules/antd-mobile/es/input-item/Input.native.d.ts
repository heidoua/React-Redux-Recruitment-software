/// <reference types="react" />
import React from 'react';
import { TextInputProperties } from 'react-native';
export interface TextInputProps extends TextInputProperties {
    ref?: any;
    focused?: boolean;
}
declare class Input extends React.Component<TextInputProps, any> {
    inputRef: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
}
export default Input;
