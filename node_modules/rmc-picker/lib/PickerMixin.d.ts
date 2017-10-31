/// <reference types="react" />
import React from 'react';
import { IPickerProps } from './PickerTypes';
export default function (ComposedComponent: any): {
    new (props?: IPickerProps | undefined, context?: any): {
        select: (value: any, itemHeight: any, scrollTo: any) => void;
        selectByIndex(index: any, itemHeight: any, zscrollTo: any): void;
        coumputeChildIndex(top: any, itemHeight: any, childrenLength: any): number;
        doScrollingComplete: (top: any, itemHeight: any, fireValueChange: any) => void;
        render(): JSX.Element;
        setState<K extends string>(f: (prevState: any, props: IPickerProps) => Pick<any, K>, callback?: (() => any) | undefined): void;
        setState<K extends string>(state: Pick<any, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<IPickerProps>;
        state: any;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    Item: (_props: {
        className?: string | undefined;
        value: any;
    }) => null;
};
