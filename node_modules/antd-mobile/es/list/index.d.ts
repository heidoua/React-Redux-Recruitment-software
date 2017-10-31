/// <reference types="react" />
import React from 'react';
import Item from './ListItem';
import { ListProps as BasePropsType } from './PropsType';
export interface ListProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
    role?: string;
}
export default class List extends React.Component<ListProps, any> {
    static Item: typeof Item;
    static defaultProps: Partial<ListProps>;
    render(): JSX.Element;
}
