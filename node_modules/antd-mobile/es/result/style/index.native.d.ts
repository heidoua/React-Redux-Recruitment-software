import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
export interface IResultStyle {
    result: ViewStyle;
    imgWrap: ViewStyle;
    img: ImageStyle;
    title: ViewStyle;
    titleText: TextStyle;
    message: ViewStyle;
    messageText: TextStyle;
    buttonWrap: ViewStyle;
    button: ViewStyle;
}
declare const _default: {
    result: {
        alignItems: string;
        paddingVertical: number;
        backgroundColor: string;
        borderBottomColor: string;
    };
    imgWrap: {
        margin: number;
    };
    img: {
        width: number;
        height: number;
    };
    title: {
        marginTop: number;
        paddingHorizontal: number;
    };
    titleText: {
        fontSize: number;
        color: string;
    };
    message: {
        marginTop: number;
        paddingHorizontal: number;
    };
    messageText: {
        fontSize: number;
        color: string;
    };
    buttonWrap: {
        flexDirection: string;
        marginTop: number;
        paddingHorizontal: number;
    };
    button: {
        flex: number;
    };
};
export default _default;
