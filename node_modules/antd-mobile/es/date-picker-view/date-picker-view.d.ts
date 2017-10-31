/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class DatePickerView extends React.Component<tsPropsType, any> {
    static defaultProps: {
        mode: string;
        extra: string;
        prefixCls: string;
        pickerPrefixCls: string;
        minuteStep: number;
        use12Hours: boolean;
    };
    static contextTypes: {
        antLocale: any;
    };
    render(): JSX.Element;
}
