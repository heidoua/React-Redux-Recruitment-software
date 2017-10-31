/// <reference types="react" />
import React from 'react';
import Item from './Item';
import tsPropsType from './PropsType';
export interface PopOverPropsType extends tsPropsType {
    prefixCls?: string;
}
export default class Popover extends React.Component<PopOverPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        placement: string;
        align: {
            overflow: {
                adjustY: number;
                adjustX: number;
            };
        };
        trigger: string[];
    };
    static Item: typeof Item;
    render(): JSX.Element;
}
