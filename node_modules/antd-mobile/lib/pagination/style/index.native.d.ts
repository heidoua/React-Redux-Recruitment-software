import { ViewStyle, TextStyle } from 'react-native';
export interface IPaginationStyle {
    container: ViewStyle;
    numberStyle: ViewStyle;
    totalStyle: TextStyle;
    activeTextStyle: TextStyle;
    indicatorStyle: ViewStyle;
    pointStyle: ViewStyle;
    pointActiveStyle: ViewStyle;
    spaceStyle: ViewStyle;
}
declare const _default: {
    container: {
        alignItems: string;
        justifyContent: string;
    };
    numberStyle: {
        flexDirection: string;
        justifyContent: string;
    };
    totalStyle: {
        fontSize: number;
        color: string;
    };
    activeTextStyle: {
        fontSize: number;
        color: string;
    };
    indicatorStyle: {
        flexDirection: string;
    };
    pointStyle: {
        width: number;
        height: number;
        borderRadius: number;
        backgroundColor: string;
    };
    pointActiveStyle: {
        backgroundColor: string;
    };
    spaceStyle: {
        marginHorizontal: number;
        marginVertical: number;
    };
};
export default _default;
