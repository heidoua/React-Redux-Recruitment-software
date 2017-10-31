/// <reference types="react" />
import React from 'react';
import { IAccordionStyle } from './style/index.native';
import AccordionProps from './PropsType';
export interface AccordionPanelProps {
    key?: string;
    header: any;
}
export interface IAccordionNativeProps extends AccordionProps {
    styles?: IAccordionStyle;
}
declare class Accordion extends React.Component<IAccordionNativeProps, any> {
    static defaultProps: {
        styles: any;
    };
    static Panel: any;
    _renderHeader: (section: any, _: any, isActive: any) => JSX.Element;
    _renderContent: (section: any) => any;
    onChange: (idx: any) => void;
    render(): JSX.Element;
}
export default Accordion;
