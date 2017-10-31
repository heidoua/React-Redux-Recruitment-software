/// <reference types="react" />
import React from 'react';
export declare type OperationButtonType = {
    text: string;
    onPress?: () => void;
    style?: any;
};
export interface OperationContainerProps {
    actions: Array<OperationButtonType>;
    onAnimationEnd?: (visible: boolean) => void;
}
export default class OperationContainer extends React.Component<OperationContainerProps, any> {
    constructor(props: any);
    onClose: () => void;
    render(): JSX.Element;
}
