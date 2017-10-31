/// <reference types="react" />
import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
export interface MarqueeProp {
    text: React.ReactNode;
    loop?: boolean;
    leading?: number;
    trailing?: number;
    className?: string;
    fps?: number;
    style?: StyleProp<TextStyle>;
    maxWidth?: number;
}
declare class Marquee extends React.PureComponent<MarqueeProp, any> {
    static defaultProps: {
        text: string;
        loop: boolean;
        leading: number;
        trailing: number;
        fps: number;
        maxWidth: number;
    };
    texts: any;
    twidth: number;
    width: number;
    constructor(props: any);
    onLayout: (e: any) => void;
    tryStart(): void;
    onLayoutContainer: (e: any) => void;
    startMove: () => void;
    moveToHeader: () => void;
    render(): JSX.Element;
}
export default Marquee;
