import { ViewStyle, TextStyle } from 'react-native';
export interface INoticeBarStyle {
    notice: ViewStyle;
    container: ViewStyle;
    content: TextStyle;
    left6: ViewStyle;
    left15: ViewStyle;
    actionWrap: ViewStyle;
    close: TextStyle;
    link: TextStyle;
}
declare const _default: {
    notice: {
        backgroundColor: string;
        height: number;
        overflow: string;
        flexDirection: string;
        alignItems: string;
    };
    container: {
        flex: number;
        marginRight: number;
        overflow: string;
        width: number;
    };
    content: {
        fontSize: number;
        color: string;
    };
    left6: {
        marginLeft: number;
    };
    left15: {
        marginLeft: number;
    };
    actionWrap: {
        marginRight: number;
    };
    close: {
        color: string;
        fontSize: number;
        fontWeight: string;
        textAlign: string;
    };
    link: {
        transform: {
            rotate: string;
        }[];
        color: string;
        fontSize: number;
        fontWeight: string;
        textAlign: string;
    };
};
export default _default;
