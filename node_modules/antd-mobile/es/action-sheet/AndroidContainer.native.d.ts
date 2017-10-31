/// <reference types="react" />
import React from 'react';
import { IActionSheetStyle } from './style/index.native';
export interface IActionSheetNativeProps {
    onAnimationEnd?: (visible: boolean) => void;
    visible?: boolean;
    config?: any;
    callback?: (index: number) => void;
    styles?: IActionSheetStyle;
}
declare class ActionSheetAndroid extends React.Component<IActionSheetNativeProps, any> {
    constructor(props: any);
    confirm(index: any): void;
    render(): JSX.Element;
}
export default ActionSheetAndroid;
