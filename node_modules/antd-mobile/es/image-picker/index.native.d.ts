/// <reference types="react" />
import React from 'react';
import { ImagePickerPropTypes } from './PropsType';
import { IImagePickerStyle } from './style/index.native';
export interface ImagePickerNativeProps extends ImagePickerPropTypes {
    styles?: IImagePickerStyle;
}
export default class ImagePicker extends React.Component<ImagePickerNativeProps, any> {
    static defaultProps: {
        styles: any;
        onChange(): void;
        onFail(): void;
        files: never[];
        selectable: boolean;
    };
    plusText: any;
    plusWrap: any;
    constructor(props: any);
    onPressIn: () => void;
    onPressOut: () => void;
    showPicker: () => void;
    addImage(imageObj: any): void;
    removeImage(idx: number): void;
    hideImageRoll: () => void;
    onImageClick(index: any): void;
    render(): JSX.Element;
}
