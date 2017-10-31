/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface AccordionProps extends BasePropsType {
    className?: string;
    prefixCls?: string;
    openAnimation?: any;
    accordion?: boolean;
}
export default class Accordion extends React.Component<AccordionProps, any> {
    static Panel: any;
    static defaultProps: {
        prefixCls: string;
    };
    render(): JSX.Element;
}
