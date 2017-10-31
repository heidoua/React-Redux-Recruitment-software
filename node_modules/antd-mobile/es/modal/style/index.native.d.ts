import { ViewStyle, TextStyle } from 'react-native';
export interface IModalStyle {
    container: ViewStyle;
    wrap: ViewStyle;
    popupContainer: ViewStyle;
    innerContainer: ViewStyle;
    footer: ViewStyle;
    header: TextStyle;
    body: ViewStyle;
    maskClosable: ViewStyle;
    closeWrap: ViewStyle;
    close: TextStyle;
    buttonGroupH: ViewStyle;
    buttonGroupV: ViewStyle;
    buttonWrapH: ViewStyle;
    buttonWrapV: ViewStyle;
    buttonText: TextStyle;
    operationContainer: ViewStyle;
    operationBody: ViewStyle;
    buttonTextOperation: TextStyle;
}
declare const _default: {
    container: {
        zIndex: number;
    };
    wrap: {
        justifyContent: string;
        alignItems: string;
    };
    popupContainer: {};
    popupSlideUp: {
        position: string;
        left: number;
        right: number;
        bottom: number;
    };
    popupSlideDown: {};
    innerContainer: {
        borderRadius: number;
        width: number;
        paddingTop: number;
        overflow: string;
    };
    footer: {
        position: string;
        bottom: number;
        left: number;
        right: number;
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
    header: {
        fontSize: number;
        color: string;
        textAlign: string;
        paddingHorizontal: number;
    };
    body: {
        paddingTop: number;
        paddingBottom: number;
        paddingHorizontal: number;
    };
    maskClosable: {
        position: string;
        top: number;
        bottom: number;
        left: number;
        right: number;
        backgroundColor: string;
    };
    closeWrap: {
        position: string;
        top: number;
        left: number;
    };
    close: {
        fontSize: number;
        fontWeight: string;
        color: string;
        lineHeight: number;
    };
    buttonGroupH: {
        flexGrow: number;
        flexDirection: string;
    };
    buttonGroupV: {
        flexGrow: number;
        flexDirection: string;
    };
    buttonWrapH: {
        height: number;
        flexGrow: number;
        borderColor: string;
        borderTopWidth: number;
        borderRightWidth: number;
        paddingVertical: number;
    };
    buttonWrapV: {
        flexGrow: number;
        borderTopWidth: number;
        borderColor: string;
        paddingVertical: number;
    };
    buttonText: {
        textAlign: string;
        color: string;
        fontSize: number;
        backgroundColor: string;
    };
    operationContainer: {
        paddingTop: number;
    };
    operationBody: {
        paddingBottom: number;
        paddingHorizontal: number;
    };
    buttonTextOperation: {
        color: string;
        textAlign: string;
        paddingHorizontal: number;
    };
};
export default _default;
