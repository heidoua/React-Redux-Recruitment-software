import { ViewStyle, TextStyle } from 'react-native';
export interface ITabBarStyle {
    tabbar: ViewStyle;
    content: ViewStyle;
    tabs: ViewStyle;
    barItem: ViewStyle;
    barIcon: ViewStyle;
    barItemSelected: ViewStyle;
    barItemTitle: TextStyle;
    contentItem: ViewStyle;
    contentItemSelected: ViewStyle;
    badge: ViewStyle;
    badgeText: TextStyle;
}
declare const _default: {
    tabbar: {
        flex: number;
    };
    content: {
        flex: number;
    };
    tabs: {
        height: number;
        borderTopWidth: number;
        borderColor: string;
        borderStyle: string;
        flexDirection: string;
    };
    barItem: {
        flex: number;
        alignItems: string;
        justifyContent: string;
    };
    barIcon: {
        width: number;
        height: number;
        marginTop: number;
    };
    barItemSelected: {};
    barItemTitle: {
        fontSize: number;
        marginTop: number;
    };
    contentItem: {
        position: string;
        top: number;
        left: number;
        right: number;
        bottom: number;
        backgroundColor: string;
        height: number;
    };
    contentItemSelected: {
        height: null;
    };
    badge: {
        minWidth: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
        position: string;
        top: number;
        left: number;
        paddingHorizontal: number;
    };
    badgeText: {
        textAlign: string;
        color: string;
    };
};
export default _default;
