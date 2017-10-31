/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
import IndexedList from './Indexed';
export interface ListViewPropsType extends tsPropsType {
    onQuickSearch?: Function;
    quickSearchBarStyle?: React.CSSProperties;
    quickSearchBarTop?: Object;
    delayTime?: number;
    delayActivityIndicator?: any;
}
export default class ListView extends React.Component<ListViewPropsType, any> {
    static defaultProps: {
        prefixCls: string;
        listPrefixCls: string;
    };
    static DataSource: any;
    static IndexedList: typeof IndexedList;
    listviewRef: any;
    scrollTo: (...args: any[]) => any;
    getInnerViewNode: () => any;
    render(): JSX.Element;
}
