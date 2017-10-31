/// <reference types="react" />
import React from 'react';
import { FlexItemProps as BasePropsType } from './PropsType';
export interface FlexItemProps extends BasePropsType {
    flex?: number;
    onPress?: (e?: any) => void;
    onLongPress?: any;
    onPressIn?: any;
    onPressOut?: any;
}
export default class FlexItem extends React.Component<FlexItemProps, any> {
    static defaultProps: {
        flex: number;
    };
    render(): JSX.Element;
}
