/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface SegmentedControlProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        prefixCls: string;
        selectedIndex: number;
        disabled: boolean;
        values: never[];
        onChange(): void;
        onValueChange(): void;
        style: {};
        tintColor: string;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick(e: any, index: any, value: any): void;
    renderSegmentItem(idx: any, value: any, selected: any): JSX.Element;
    render(): JSX.Element;
}
