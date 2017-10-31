/// <reference types="react" />
import React from 'react';
export interface IPickerView {
    prefixCls?: string;
    pickerPrefixCls?: string;
    cols?: number;
    cascade?: boolean;
    value?: any[];
    data?: any;
    styles?: any;
    onChange?: (value?) => void;
    onScrollChange?: (value?) => void;
    indicatorStyle?: any;
    itemStyle?: any;
}
export default class PickerView extends React.Component<IPickerView, any> {
    static defaultProps: {
        prefixCls: string;
        pickerPrefixCls: string;
        cols: number;
        cascade: boolean;
        value: never[];
        onChange(): void;
    };
    getCol: () => any;
    render(): any;
}
