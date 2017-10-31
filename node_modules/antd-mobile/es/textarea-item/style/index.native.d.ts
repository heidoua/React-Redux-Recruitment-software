import { ViewStyle, TextStyle } from 'react-native';
export interface ITextareaItemStyle {
    container: ViewStyle;
    input: TextStyle;
    icon: ViewStyle;
    errorIcon: ViewStyle;
    count: ViewStyle;
}
declare const _default: {
    container: {
        marginLeft: number;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    input: {
        paddingHorizontal: number;
        backgroundColor: string;
        fontSize: number;
        lineHeight: number;
        textAlignVertical: string;
    };
    icon: {
        position: string;
        top: number;
        width: number;
        height: number;
    };
    errorIcon: {
        position: string;
        right: number;
        top: number;
    };
    count: {
        position: string;
        right: number;
        bottom: number;
    };
};
export default _default;
