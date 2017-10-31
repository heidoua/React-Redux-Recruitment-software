/// <reference types="react" />
import React from 'react';
import PaginationProps from './PropsType';
export default class Pagination extends React.Component<PaginationProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        current: number;
        total: number;
        simple: boolean;
        onChange: () => void;
    };
    static contextTypes: {
        antLocale: any;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onChange(p: any): void;
    render(): JSX.Element;
}
