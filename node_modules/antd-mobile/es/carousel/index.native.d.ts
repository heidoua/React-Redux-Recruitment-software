/// <reference types="react" />
import React from 'react';
import BasePropsType from './PropsType';
export interface CarouselProps extends BasePropsType {
    bounces?: boolean;
    onScrollBeginDrag?: Function;
    onMomentumScrollEnd?: Function;
    styles?: any;
}
declare class Carousel extends React.Component<CarouselProps, any> {
    static defaultProps: CarouselProps;
    private scrollviewRef;
    private autoplayTimer;
    private androidScrollEndTimer;
    private scrollEndTimter;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    loopJump: () => void;
    autoplay: () => void;
    onScrollBegin: (e: any) => void;
    onScrollEnd: (e: any) => void;
    onScrollEndDrag: (e: any) => void;
    updateIndex: (offset: any) => void;
    scrollNextPage: () => void;
    renderContent: (pages: any) => JSX.Element;
    renderDots: (index: any) => any;
    onLayout: (e: any) => void;
    render(): JSX.Element;
}
export default Carousel;
