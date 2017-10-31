/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface SwipeActionProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
}
declare class SwipeAction extends React.Component<SwipeActionProps, any> {
    static defaultProps: {
        prefixCls: string;
        autoClose: boolean;
        disabled: boolean;
        left: never[];
        right: never[];
        onOpen(): void;
        onClose(): void;
    };
    render(): JSX.Element;
}
export default SwipeAction;
