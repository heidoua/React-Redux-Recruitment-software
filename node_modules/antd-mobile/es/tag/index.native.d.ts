/// <reference types="react" />
import React from 'react';
import { ITagStyle } from './style/index.native';
import TagProps from './PropsType';
export interface ITagNativeProps extends TagProps {
    styles?: ITagStyle;
}
export default class Tag extends React.Component<ITagNativeProps, any> {
    static defaultProps: {
        disabled: boolean;
        small: boolean;
        selected: boolean;
        closable: boolean;
        onClose(): void;
        afterClose(): void;
        onChange(): void;
        styles: any;
    };
    closeDom: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick: () => void;
    onTagClose: () => void;
    onPressIn: () => void;
    onPressOut: () => void;
    render(): JSX.Element | null;
}
