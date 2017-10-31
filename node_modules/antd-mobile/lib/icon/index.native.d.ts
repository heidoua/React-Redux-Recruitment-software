/// <reference types="react" />
import React from 'react';
export interface IconPropType {
    type: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | number;
    color?: string;
}
export default class Icon extends React.Component<any, any> {
    static defaultProps: {
        size: string;
        color: string;
    };
    render(): JSX.Element;
}
