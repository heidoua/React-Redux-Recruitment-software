/// <reference types="react" />
import React from 'react';
import MultiPickerProps from './MultiPickerProps';
export interface IMultiPickerProp {
    getValue: Function;
}
declare const _default: {
    new (props?: MultiPickerProps | undefined, context?: any): {
        getValue: () => any[];
        onChange: (i: any, v: any, cb: any) => void;
        onValueChange: (i: any, v: any) => void;
        onScrollChange: (i: any, v: any) => void;
        render(): JSX.Element;
        setState<K extends string>(f: (prevState: any, props: MultiPickerProps) => Pick<any, K>, callback?: (() => any) | undefined): void;
        setState<K extends string>(state: Pick<any, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<MultiPickerProps>;
        state: any;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    defaultProps: {
        prefixCls: string;
        onValueChange(): void;
    };
};
export default _default;
