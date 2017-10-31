/// <reference types="react" />
import React from 'react';
import { ListItemProps as ListItemBasePropsType, BriefProps as BriefBasePropsType } from './PropsType';
export interface ListItemProps extends ListItemBasePropsType {
    prefixCls?: string;
    className?: string;
    role?: string;
}
export interface BriefProps extends BriefBasePropsType {
    prefixCls?: string;
    className?: string;
    role?: string;
}
export declare class Brief extends React.Component<BriefProps, any> {
    render(): JSX.Element;
}
declare class ListItem extends React.Component<ListItemProps, any> {
    static defaultProps: Partial<ListItemProps>;
    static Brief: typeof Brief;
    debounceTimeout: any;
    constructor(props: any);
    componentWillUnmount(): void;
    onClick: (ev: any) => void;
    render(): JSX.Element;
}
export default ListItem;
