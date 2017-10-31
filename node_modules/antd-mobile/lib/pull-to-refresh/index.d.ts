/// <reference types="react" />
import React from 'react';
import { PropsType } from 'rmc-pull-to-refresh/lib/PropsType';
export default class PullToRefresh extends React.Component<PropsType, any> {
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
