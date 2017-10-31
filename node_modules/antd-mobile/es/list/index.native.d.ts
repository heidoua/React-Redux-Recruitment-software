/// <reference types="react" />
import React from 'react';
import Item from './ListItem.native';
import { ListProps as BasePropsType } from './PropsType';
import listStyle from './style/index.native';
export interface ListProps extends BasePropsType {
    styles?: typeof listStyle;
}
export default class List extends React.Component<ListProps, any> {
    static Item: typeof Item;
    static defaultProps: {
        styles: any;
    };
    render(): JSX.Element;
}
