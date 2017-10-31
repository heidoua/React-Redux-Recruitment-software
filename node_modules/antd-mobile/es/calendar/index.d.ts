/// <reference types="react" />
import React from 'react';
import tsPropsType from './PropsType';
export default class Calendar extends React.Component<tsPropsType, any> {
    static defaultProps: tsPropsType;
    static contextTypes: {
        antLocale: any;
    };
    render(): JSX.Element;
}
