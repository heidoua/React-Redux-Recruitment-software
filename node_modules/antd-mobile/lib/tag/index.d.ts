/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface TagProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class Tag extends React.Component<TagProps, any> {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
        selected: boolean;
        closable: boolean;
        small: boolean;
        onChange(): void;
        onClose(): void;
        afterClose(): void;
    };
    constructor(props: any);
    componentWillReceiveProps(nextProps: any): void;
    onClick: () => void;
    onTagClose: () => void;
    render(): JSX.Element | null;
}
