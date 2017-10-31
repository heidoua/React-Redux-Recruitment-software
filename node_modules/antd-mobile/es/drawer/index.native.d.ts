/// <reference types="react" />
import React from 'react';
import { DrawerNativeProps } from './PropsType';
export default class Drawer extends React.Component<DrawerNativeProps, any> {
    static defaultProps: {
        position: string;
        open: boolean;
        drawerWidth: number;
    };
    drawer: any;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    onOpenChange(isOpen: any): void;
    render(): JSX.Element;
}
