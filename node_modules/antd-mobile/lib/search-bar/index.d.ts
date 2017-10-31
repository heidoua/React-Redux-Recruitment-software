/// <reference types="react" />
import React from 'react';
import { SearchBarProps as BasePropsType, SearchBarState } from './PropsType';
export interface SearchBarProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    static defaultProps: {
        prefixCls: string;
        placeholder: string;
        onSubmit: () => void;
        onChange: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onClear: () => void;
        showCancelButton: boolean;
        disabled: boolean;
    };
    rightBtnInitMarginleft: any;
    firstFocus: any;
    scrollIntoViewTimeout: any;
    blurFromOnClear: any;
    onBlurTimeout: any;
    inputRef: any;
    private rightBtnRef;
    private syntheticPhContainerRef;
    private syntheticPhRef;
    private inputContainerRef;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    onSubmit: (e: any) => void;
    onChange: (e: any) => void;
    onFocus: () => void;
    onBlur: () => void;
    onClear: () => void;
    doClear: (blurFromOnClear?: boolean) => void;
    onCancel: () => void;
    focus: () => void;
    render(): JSX.Element;
}
