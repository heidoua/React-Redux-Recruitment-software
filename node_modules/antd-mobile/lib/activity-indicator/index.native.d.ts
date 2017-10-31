/// <reference types="react" />
import React from 'react';
import { IActivityIndicatorStyle } from './style/index.native';
import PropTypes from './PropsType';
export interface IActivityIndicatorNativeProps extends PropTypes {
    styles?: IActivityIndicatorStyle;
    color?: string;
}
export default class RNActivityIndicator extends React.Component<IActivityIndicatorNativeProps, any> {
    static defaultProps: {
        animating: boolean;
        color: string;
        size: string;
        toast: boolean;
        styles: any;
    };
    _renderToast(): JSX.Element;
    _renderSpinner(): JSX.Element;
    render(): JSX.Element | null;
}
