/// <reference types="react" />
import React from 'react';
import { TabBarProps } from './PropsType';
import { ITabBarStyle } from './style/index.native';
export interface ITabBarNativeProps extends TabBarProps {
    styles?: ITabBarStyle;
}
declare class TabBar extends React.Component<ITabBarNativeProps, any> {
    static defaultProps: {
        barTintColor: string;
        tintColor: string;
        unselectedTintColor: string;
        styles: any;
    };
    static Item: any;
    getPanes(content: any): any[];
    render(): JSX.Element;
}
export default TabBar;
