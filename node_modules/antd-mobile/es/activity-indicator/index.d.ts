/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface ActivityIndicatorProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class ActivityIndicator extends React.Component<ActivityIndicatorProps, any> {
    static defaultProps: {
        prefixCls: string;
        animating: boolean;
        size: string;
        panelColor: string;
        toast: boolean;
    };
    render(): JSX.Element | null;
}
