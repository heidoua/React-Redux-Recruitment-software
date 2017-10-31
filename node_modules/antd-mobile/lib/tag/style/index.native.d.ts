import { TextStyle, ViewStyle } from 'react-native';
export interface ITagStyle {
    tag: ViewStyle;
    wrap: ViewStyle;
    wrapSmall: ViewStyle;
    text: TextStyle;
    textSmall: TextStyle;
    normalWrap: ViewStyle;
    normalText: TextStyle;
    activeWrap: ViewStyle;
    activeText: TextStyle;
    disabledWrap: ViewStyle;
    disabledText: TextStyle;
    close: ViewStyle;
    closeIOS: ViewStyle;
    closeAndroid: ViewStyle;
    closeText: TextStyle;
    closeTransform: ViewStyle;
}
declare const _default: {
    tag: {
        borderRadius: number;
        backgroundColor: string;
        flexDirection: string;
        overflow: string;
    };
    wrap: {
        overflow: string;
        borderRadius: number;
        borderWidth: number;
        borderStyle: string;
        paddingVertical: number;
        paddingHorizontal: number;
    };
    wrapSmall: {
        paddingVertical: number;
        paddingHorizontal: number;
    };
    text: {
        fontSize: number;
        textAlign: string;
    };
    textSmall: {
        fontSize: number;
    };
    normalWrap: {
        backgroundColor: string;
        borderColor: string;
    };
    normalText: {
        color: string;
    };
    activeWrap: {
        backgroundColor: string;
        borderColor: string;
    };
    activeText: {
        color: string;
    };
    disabledWrap: {
        backgroundColor: string;
        borderWidth: number;
    };
    disabledText: {
        color: string;
    };
    close: {
        position: string;
        backgroundColor: string;
    };
    closeIOS: {
        borderRadius: number;
        width: number;
        height: number;
        left: number;
        top: number;
        overflow: string;
    };
    closeAndroid: {
        width: number;
        height: number;
        left: number;
        top: number;
        transform: {
            rotate: string;
        }[];
    };
    closeText: {
        color: string;
        textAlign: string;
        fontSize: number;
        lineHeight: number;
    };
    closeTransform: {
        transform: {
            rotate: string;
        }[];
    };
};
export default _default;
