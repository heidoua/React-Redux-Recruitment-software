/// <reference types="react" />
import React from 'react';
import WingBlankProps from './PropsType';
declare class WingBlank extends React.Component<WingBlankProps, any> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
export default WingBlank;
