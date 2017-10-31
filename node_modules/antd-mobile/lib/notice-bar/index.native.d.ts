/// <reference types="react" />
import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import { INoticeBarStyle } from './style/index.native';
import { MarqueeProp } from './Marquee.native';
import NoticeBarProps from './PropsType';
export interface INoticeNativeProps extends NoticeBarProps {
    styles?: INoticeBarStyle;
    marqueeProps?: MarqueeProp;
    style?: StyleProp<ViewStyle>;
}
export default class NoticeBar extends React.Component<INoticeNativeProps, any> {
    static defaultProps: {
        mode: string;
        onClick(): void;
        icon: JSX.Element;
        styles: any;
    };
    constructor(props: any);
    onClick: () => void;
    render(): JSX.Element | null;
}
