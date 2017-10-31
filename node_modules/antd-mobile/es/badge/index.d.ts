/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface BadgeProps extends BasePropsType {
    prefixCls?: string;
    className?: string;
    hot?: boolean;
}
export default class Badge extends React.Component<BadgeProps, any> {
    static defaultProps: {
        prefixCls: string;
        size: string;
        overflowCount: number;
        dot: boolean;
        corner: boolean;
    };
    render(): JSX.Element;
}
