/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Popover extends React.Component<tsPropsType, any> {
    static defaultProps: {
        onSelect: () => void;
    };
    static Item: any;
    menuContextRef: any;
    render(): JSX.Element;
}
