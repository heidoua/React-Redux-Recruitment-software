/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface StepProps extends BasePropsType {
    prefixCls?: string;
    showNumber?: boolean;
    className?: string;
}
export default class Stepper extends React.Component<StepProps, any> {
    static defaultProps: {
        prefixCls: string;
        step: number;
        readOnly: boolean;
        showNumber: boolean;
        focusOnUpDown: boolean;
    };
    stepperRef: any;
    render(): JSX.Element;
}
