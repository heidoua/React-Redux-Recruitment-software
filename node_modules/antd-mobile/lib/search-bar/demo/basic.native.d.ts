/// <reference types="react" />
import React from 'react';
export default class SearchBarDemo extends React.Component<any, any> {
    state: {
        value: string;
    };
    onChange: (value: any) => void;
    clear: () => void;
    render(): JSX.Element;
}
