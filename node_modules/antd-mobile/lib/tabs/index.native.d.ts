/// <reference types="react" />
import React from 'react';
import { DefaultTabBar as RMCDefaultTabBar } from 'rmc-tabs/lib/index.native';
import TabsProps from './PropsType';
export default class Tabs extends React.PureComponent<TabsProps, {}> {
    static DefaultTabBar: typeof RMCDefaultTabBar;
    static defaultProps: {};
    renderTabBar: (props: any) => JSX.Element;
    render(): JSX.Element;
}
