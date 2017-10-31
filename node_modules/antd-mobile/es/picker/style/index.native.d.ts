import { ViewStyle, TextStyle } from 'react-native';
export interface IPickerStyle {
    modal: ViewStyle;
    header: ViewStyle;
    headerItem: ViewStyle;
    actionText: TextStyle;
    title: TextStyle;
}
declare const _default: {
    modal: {
        flex: number;
        flexDirection: string;
        justifyContent: string;
    };
    header: {
        flexGrow: number;
        height: number;
        alignItems: string;
        flexDirection: string;
        justifyContent: string;
        borderBottomWidth: number;
        borderBottomColor: string;
    };
    headerItem: {
        height: number;
        flex: number;
        alignItems: string;
        justifyContent: string;
    };
    actionText: {
        color: string;
        fontSize: number;
        textAlign: string;
    };
    okText: {};
    dismissText: {};
    title: {
        color: string;
        fontSize: number;
        textAlign: string;
    };
};
export default _default;
