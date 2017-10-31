/// <reference types="react" />
import React from 'react';
import { TabBarProps } from './PropsType';
declare class TabBar extends React.Component<TabBarProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
    };
    static Item: any;
    render(): JSX.Element;
}
export default TabBar;
