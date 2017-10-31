/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface CarouselProps extends BasePropsType {
    className?: string;
    prefixCls?: string;
}
export default class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps: {
        prefixCls: string;
        dots: boolean;
        arrows: boolean;
        autoplay: boolean;
        infinite: boolean;
        cellAlign: string;
        selectedIndex: number;
        dotStyle: {};
        dotActiveStyle: {};
    };
    constructor(props: any);
    onChange: (index: any) => void;
    render(): JSX.Element;
}
