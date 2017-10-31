/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface ResultProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
export default class Result extends React.Component<ResultProps, any> {
    static defaultProps: {
        prefixCls: string;
        buttonType: string;
        onButtonClick: () => void;
    };
    render(): JSX.Element;
}
