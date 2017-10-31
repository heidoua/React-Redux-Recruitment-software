/// <reference types="react" />
import React from 'react';
export declare type AlertButtonType = {
    text: string;
    onPress?: () => void;
    style?: any;
};
export interface AlertContainerProps {
    title: string;
    content: any;
    actions: Array<AlertButtonType>;
    onAnimationEnd?: (visible: boolean) => void;
}
export default class AlertContainer extends React.Component<AlertContainerProps, any> {
    constructor(props: any);
    onClose: () => void;
    render(): JSX.Element;
}
