/// <reference types="react" />
import React from 'react';
import NoticeBarProps from './PropsType';
import { IMarqueeProps } from './Marquee';
export interface INoticeWebProps extends NoticeBarProps {
    marqueeProps?: IMarqueeProps;
    className?: string;
    prefixCls?: string;
    style?: {};
}
export default class NoticeBar extends React.Component<INoticeWebProps, any> {
    static defaultProps: {
        prefixCls: string;
        mode: string;
        icon: JSX.Element;
        onClick(): void;
    };
    constructor(props: any);
    onClick: () => void;
    render(): JSX.Element | null;
}
