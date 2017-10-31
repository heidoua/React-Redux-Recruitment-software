/// <reference types="react" />
import React from 'react';
export interface IconPropType {
    type: string;
    className?: string;
    style?: React.CSSProperties;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    onClick?: (e?: any) => void;
}
export default class Icon extends React.Component<IconPropType, any> {
    static defaultProps: {
        size: string;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
