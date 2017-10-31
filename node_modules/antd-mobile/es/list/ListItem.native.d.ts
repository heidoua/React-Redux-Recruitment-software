/// <reference types="react" />
import React from 'react';
import { ListItemProps as ListItemBasePropsType, BriefProps as BriefBasePropsType } from './PropsType';
export interface ListItemProps extends ListItemBasePropsType {
    styles?: {
        underlayColor: {};
        Content: {};
        column: {};
        Extra: {};
        Arrow: {};
        ArrowV: {};
        Item: {};
        Thumb: {};
        multipleThumb: {};
        Line: {};
        multipleLine: {};
    };
    onPressIn?: () => void;
    onPressOut?: () => void;
}
export interface BriefProps extends BriefBasePropsType {
    styles?: {
        Brief: {};
        BriefText: {};
    };
}
export declare class Brief extends React.Component<BriefProps, any> {
    static defaultProps: {
        styles: any;
    };
    render(): JSX.Element;
}
export default class Item extends React.Component<ListItemProps, any> {
    static defaultProps: Partial<ListItemProps>;
    static Brief: typeof Brief;
    render(): JSX.Element;
}
