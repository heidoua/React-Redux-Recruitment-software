/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface PropsType extends BasePropsType {
    prefixCls?: string;
    className?: string;
    use12Hours?: boolean;
    pickerPrefixCls?: string;
    popupPrefixCls?: string;
    onOk?: (x: any) => void;
}
export default class DatePicker extends React.Component<PropsType, any> {
    static defaultProps: {
        mode: string;
        prefixCls: string;
        pickerPrefixCls: string;
        popupPrefixCls: string;
        minuteStep: number;
        use12Hours: boolean;
    };
    static contextTypes: {
        antLocale: any;
    };
    private scrollValue;
    setScrollValue: (v: any) => void;
    onOk: (v: any) => void;
    fixOnOk: (picker: any) => void;
    render(): JSX.Element;
}
