/// <reference types="react" />
import React from 'react';
import { IPickerStyle } from '../picker/style/index.native';
import tsPropsType from './PropsType';
export interface IDatePickerNativeProps extends tsPropsType {
    styles?: IPickerStyle;
    triggerTypes?: string;
}
export default class DatePicker extends React.Component<IDatePickerNativeProps, any> {
    static defaultProps: {
        mode: string;
        triggerType: string;
        styles: any;
        minuteStep: number;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): JSX.Element;
}
