import { ViewStyle, ImageStyle, TextStyle } from 'react-native';
export interface ICardStyle {
    card: ViewStyle;
    full: ViewStyle;
    headerWrap: ViewStyle;
    headerTitle: ViewStyle;
    headerImage: ImageStyle;
    headerContent: TextStyle;
    headerExtra: TextStyle;
    body: ViewStyle;
    footerWrap: ViewStyle;
    footerContent: TextStyle;
    footerExtra: TextStyle;
}
declare const _default: {
    card: {
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        paddingBottom: number;
        flexDirection: string;
        backgroundColor: string;
    };
    full: {
        borderRadius: number;
        borderLeftWidth: number;
        borderRightWidth: number;
    };
    headerWrap: {
        flexDirection: string;
        paddingVertical: number;
        paddingRight: number;
        marginLeft: number;
        alignItems: string;
    };
    headerTitle: {
        flex: number;
        flexDirection: string;
        alignItems: string;
    };
    headerImage: {
        marginRight: number;
    };
    headerContent: {
        color: string;
        fontSize: number;
        flex: number;
    };
    headerExtra: {
        flex: number;
        fontSize: number;
        color: string;
        textAlign: string;
    };
    body: {
        flexGrow: number;
        paddingVertical: number;
        minHeight: number;
        borderTopWidth: number;
        borderColor: string;
    };
    footerWrap: {
        flexDirection: string;
        paddingHorizontal: number;
    };
    footerContent: {
        flex: number;
        fontSize: number;
        color: string;
    };
    footerExtra: {
        textAlign: string;
        fontSize: number;
        color: string;
    };
};
export default _default;
