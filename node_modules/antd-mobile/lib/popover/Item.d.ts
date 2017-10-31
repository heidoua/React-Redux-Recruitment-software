/// <reference types="react" />
import React from 'react';
export default class Item extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
    };
    static myName: string;
    render(): JSX.Element;
}
