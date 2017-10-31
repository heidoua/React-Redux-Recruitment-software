import { ViewStyle, TextStyle } from 'react-native';
export interface IRadioStyle {
    wrapper: ViewStyle;
    icon: ViewStyle;
    radioItem: ViewStyle;
    radioItemRadio: ViewStyle;
    radioItemContent: TextStyle;
    radioItemContentDisable: TextStyle;
}
declare const _default: {
    wrapper: {
        flexDirection: string;
        alignItems: string;
    };
    icon: {
        width: number;
        height: number;
    };
    radioItem: {
        flexDirection: string;
        alignItems: string;
    };
    radioItemRadio: {
        marginLeft: number;
        marginRight: number;
    };
    radioItemContent: {
        color: string;
        fontSize: number;
    };
    radioItemContentDisable: {
        color: string;
    };
};
export default _default;
