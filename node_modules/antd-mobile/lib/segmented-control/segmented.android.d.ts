/// <reference types="react" />
import React from 'react';
import SegmentedControlProps from './PropsType';
import { ISegmentControlStyle } from './style/index.native';
export interface ISegmentControlNativeProps extends SegmentedControlProps {
    styles?: ISegmentControlStyle;
}
export default class SegmentedControl extends React.Component<ISegmentControlNativeProps, any> {
    static defaultProps: {
        selectedIndex: number;
        disabled: boolean;
        values: never[];
        onChange(): void;
        onValueChange(): void;
        tintColor: string;
        style: {};
        styles: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onPress(e: any, index: any, value: any): void;
    render(): JSX.Element;
}
