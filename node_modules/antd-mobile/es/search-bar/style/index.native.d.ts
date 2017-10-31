import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
export interface ISearchBarStyle {
    input: TextStyle;
    inputWrapper: ViewStyle;
    wrapper: ViewStyle;
    cancelTextContainer: ViewStyle;
    cancelText: TextStyle;
    search: ImageStyle;
}
declare const _default: {
    inputWrapper: {
        flex: number;
        flexDirection: string;
    };
    input: {
        borderRadius: number;
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        height: number;
        color: string;
        fontSize: number;
        paddingLeft: number;
        paddingRight: number;
        flex: number;
        paddingTop: number;
        paddingBottom: number;
    };
    wrapper: {
        backgroundColor: string;
        height: number;
        paddingLeft: number;
        paddingRight: number;
        flexDirection: string;
        alignItems: string;
    };
    cancelTextContainer: {
        height: number;
        justifyContent: string;
        alignItems: string;
    };
    cancelText: {
        fontSize: number;
        color: string;
        paddingLeft: number;
    };
    search: {
        tintColor: string;
        position: string;
        left: number;
        top: number;
        width: number;
        height: number;
    };
};
export default _default;
