/// <reference types="react" />
import React from 'react';
import { FlexProps as BasePropsType } from './PropsType';
export interface FlexProps extends BasePropsType {
    onPress?: (e?: any) => void;
    onLongPress?: any;
    onPressIn?: any;
    onPressOut?: any;
}
export default class Flex extends React.Component<FlexProps, any> {
    static Item: any;
    static defaultProps: {
        direction: string;
        wrap: string;
        justify: string;
        align: string;
    };
    render(): JSX.Element;
}
