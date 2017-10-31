import { ViewStyle, TextStyle } from 'react-native';
export interface IPromptStyle {
    message: TextStyle;
    inputGroup: ViewStyle;
    inputWrapper: ViewStyle;
    input: TextStyle;
    inputFirst: ViewStyle;
    inputLast: ViewStyle;
}
declare const _default: {
    message: {
        marginTop: number;
        color: string;
        fontSize: number;
        textAlign: string;
    };
    inputGroup: {
        marginTop: number;
        flexDirection: string;
    };
    inputWrapper: {
        borderWidth: number;
        borderTopWidth: number;
        borderColor: string;
    };
    input: {
        height: number;
        fontSize: number;
        paddingHorizontal: number;
        paddingVertical: number;
    };
    inputFirst: {
        borderTopWidth: number;
        borderTopLeftRadius: number;
        borderTopRightRadius: number;
    };
    inputLast: {
        borderBottomLeftRadius: number;
        borderBottomRightRadius: number;
    };
};
export default _default;
