/// <reference types="react" />
import React from 'react';
import { CheckboxProps } from './PropsType';
import { ICheckboxStyle } from './style/index.native';
export interface ICheckboxNativeProps extends CheckboxProps {
    styles?: ICheckboxStyle;
}
export default class Checkbox extends React.Component<ICheckboxNativeProps, any> {
    static CheckboxItem: any;
    static AgreeItem: any;
    static defaultProps: {
        styles: any;
    };
    constructor(props: CheckboxProps, context: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
