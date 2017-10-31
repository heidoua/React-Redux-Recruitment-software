/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface SegmentedControlProps extends BasePropsType {
    styles?: any;
}
export default class SegmentedControl extends React.Component<SegmentedControlProps, any> {
    static defaultProps: {
        tintColor: string;
        selectedIndex: number;
    };
    render(): JSX.Element;
}
