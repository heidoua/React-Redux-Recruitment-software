/// <reference types="react" />
import React from 'react';
export default class PickerViewExample extends React.Component {
    state: {
        value: null;
    };
    onChange: (value: any) => void;
    render(): JSX.Element;
}
