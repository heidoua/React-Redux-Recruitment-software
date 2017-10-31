/// <reference types="react" />
import React from 'react';
import { SearchBarProps, SearchBarState } from './PropsType';
import { ISearchBarStyle } from './style/index.native';
export interface ISearchBarNativeProps extends SearchBarProps {
    styles: ISearchBarStyle;
    onChangeText?: Function;
    onSubmitEditing?: Function;
}
export default class SearchBar extends React.Component<ISearchBarNativeProps, SearchBarState> {
    static defaultProps: {
        styles: any;
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
    static contextTypes: {
        antLocale: any;
    };
    inputRef: any;
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onSubmit: (e: any) => void;
    onChangeText: (value: any) => void;
    onCancel: () => void;
    onFocus: () => void;
    onBlur: () => void;
    render(): JSX.Element;
}
