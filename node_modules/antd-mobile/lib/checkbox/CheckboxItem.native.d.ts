/// <reference types="react" />
import React from 'react';
import { CheckboxItemProps } from './PropsType';
import { ICheckboxStyle } from './style/index.native';
export interface ICheckboxItemNativeProps extends CheckboxItemProps {
    styles?: ICheckboxStyle;
    checkboxStyle?: any;
}
export default class CheckboxItem extends React.Component<ICheckboxItemNativeProps, any> {
    static defaultProps: {
        styles: any;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
