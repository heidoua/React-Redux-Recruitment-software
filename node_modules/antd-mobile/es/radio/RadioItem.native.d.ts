/// <reference types="react" />
import React from 'react';
import { RadioItemProps } from './PropsType';
import { IRadioStyle } from './style/index.native';
export interface IRadioItemNativeProps extends RadioItemProps {
    radioStyle?: any;
    styles?: IRadioStyle;
}
export default class RadioItem extends React.Component<IRadioItemNativeProps, any> {
    static defaultProps: {
        styles: any;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
