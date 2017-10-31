import { ViewStyle, TextStyle } from 'react-native';
export interface ISegmentControlStyle {
    segment: ViewStyle;
    item: ViewStyle;
    itemLeftRadius: ViewStyle;
    itemRightRadius: ViewStyle;
    itemText: TextStyle;
}
declare const _default: {
    segment: {
        flexDirection: string;
        overflow: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
    };
    item: {
        flex: number;
        paddingVertical: number;
        borderLeftWidth: number;
        borderRightWidth: number;
        borderStyle: string;
        alignItems: string;
        justifyContent: string;
    };
    itemLeftRadius: {
        borderTopLeftRadius: number;
        borderBottomLeftRadius: number;
    };
    itemRightRadius: {
        borderTopRightRadius: number;
        borderBottomRightRadius: number;
    };
    itemText: {
        textAlign: string;
        fontSize: number;
    };
};
export default _default;
