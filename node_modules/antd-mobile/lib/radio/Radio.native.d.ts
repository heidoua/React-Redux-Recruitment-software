/// <reference types="react" />
import React from 'react';
import { RadioProps } from './PropsType';
import { IRadioStyle } from './style/index.native';
export interface IRadioNativeProps extends RadioProps {
    styles?: IRadioStyle;
}
export default class Radio extends React.Component<IRadioNativeProps, any> {
    static RadioItem: any;
    static defaultProps: {
        styles: any;
    };
    constructor(props: RadioProps, context: any);
    componentWillReceiveProps(nextProps: RadioProps): void;
    handleClick: () => void;
    render(): JSX.Element;
}
