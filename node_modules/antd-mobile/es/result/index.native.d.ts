/// <reference types="react" />
import React from 'react';
import { IResultStyle } from './style/index.native';
import ResultProps from './PropsType';
export interface IResultNativeProps extends ResultProps {
    styles?: IResultStyle;
}
export default class Result extends React.Component<IResultNativeProps, any> {
    static defaultProps: {
        styles: any;
        buttonType: string;
        buttonClick: () => void;
    };
    render(): JSX.Element;
}
