/// <reference types="react" />
import React from 'react';
import { DefaultTabBar as RMCDefaultTabBar, TabBarPropsType } from 'rmc-tabs';
import TabsProps from './PropsType';
export declare class DefaultTabBar extends RMCDefaultTabBar {
    static defaultProps: TabBarPropsType;
}
export default class Tabs extends React.PureComponent<TabsProps, {}> {
    static DefaultTabBar: typeof DefaultTabBar;
    static defaultProps: {
        prefixCls: string;
    };
    renderTabBar: (props: any) => JSX.Element;
    render(): JSX.Element;
}
