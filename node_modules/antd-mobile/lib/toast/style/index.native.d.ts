import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
export interface IToastStyle {
    container: ViewStyle;
    innerContainer: ViewStyle;
    innerWrap: ViewStyle;
    iconToast: ViewStyle;
    textToast: ViewStyle;
    content: TextStyle;
    image: ImageStyle;
    centering: ViewStyle;
}
declare const _default: {
    container: {
        position: string;
        top: number;
        left: number;
        bottom: number;
        right: number;
        backgroundColor: string;
        justifyContent: string;
        alignItems: string;
        zIndex: number;
    };
    innerContainer: {
        backgroundColor: string;
    };
    innerWrap: {
        alignItems: string;
        backgroundColor: string;
        minWidth: number;
    };
    iconToast: {
        borderRadius: number;
        padding: number;
    };
    textToast: {
        borderRadius: number;
        paddingVertical: number;
        paddingHorizontal: number;
    };
    content: {
        color: string;
        fontSize: number;
    };
    image: {
        width: number;
        height: number;
        marginBottom: number;
    };
    centering: {
        alignItems: string;
        justifyContent: string;
        padding: number;
    };
};
export default _default;
