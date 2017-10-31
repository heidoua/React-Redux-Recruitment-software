/// <reference types="react" />
import React from 'react';
export interface StepsItemProps {
    width?: number;
    size?: string;
    current?: number;
    index?: number;
    last?: boolean;
    direction?: string;
    title?: string;
    description?: string;
    status?: string;
    icon?: string;
    errorTail?: number;
    styles?: any;
}
export default class StepsItem extends React.Component<StepsItemProps, any> {
    render(): JSX.Element;
}
