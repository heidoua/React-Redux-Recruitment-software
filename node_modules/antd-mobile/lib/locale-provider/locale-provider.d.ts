/// <reference types="react" />
import React from 'react';
export interface LocaleProviderProps {
    locale: {
        Pagination?: Object;
        DatePicker?: Object;
        DatePickerView?: Object;
        InputItem?: Object;
    };
    children?: React.ReactElement<any>;
}
export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
    static propTypes: {
        locale: any;
    };
    static childContextTypes: {
        antLocale: any;
    };
    getChildContext(): {
        antLocale: {
            exist: boolean;
            Pagination?: Object | undefined;
            DatePicker?: Object | undefined;
            DatePickerView?: Object | undefined;
            InputItem?: Object | undefined;
        };
    };
    render(): React.ReactElement<any>;
}
