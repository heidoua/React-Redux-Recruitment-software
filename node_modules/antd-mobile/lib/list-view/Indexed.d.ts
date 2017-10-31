/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export interface ListViewPropsType extends tsPropsType {
    onQuickSearch?: Function;
    quickSearchBarStyle?: React.CSSProperties;
    quickSearchBarTop?: Object;
    delayTime?: number;
    delayActivityIndicator?: any;
}
export default class MIndexedList extends React.Component<ListViewPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
        listViewPrefixCls: string;
    };
    indexedListRef: any;
    render(): JSX.Element;
}
