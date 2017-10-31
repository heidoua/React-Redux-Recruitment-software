/// <reference types="react" />
import React from 'react';
export default class DatePickerViewExample extends React.Component {
    state: {
        value: null;
    };
    onChange: (value: any) => void;
    onValueChange: (...args: any[]) => void;
    render(): JSX.Element;
}
