/// <reference types="react" />
import React from 'react';
import PaginationProps from './PropsType';
import { IPaginationStyle } from './style/index.native';
export interface IPaginationNativeProps extends PaginationProps {
    styles?: IPaginationStyle;
}
export default class Pagination extends React.Component<IPaginationNativeProps, any> {
    static defaultProps: {
        mode: string;
        current: number;
        total: number;
        simple: boolean;
        onChange: () => void;
        indicatorStyle: null;
        styles: any;
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange(p: any): void;
    render(): JSX.Element;
}
