import { ViewStyle } from 'react-native';
export interface ICheckboxStyle {
    wrapper: ViewStyle;
    icon: ViewStyle;
    iconRight: ViewStyle;
    agreeItem: ViewStyle;
    agreeItemCheckbox: ViewStyle;
    checkboxItemCheckbox: ViewStyle;
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
    iconRight: {
        marginLeft: number;
    };
    agreeItem: {
        flexDirection: string;
        alignItems: string;
    };
    agreeItemCheckbox: {
        marginLeft: number;
        marginRight: number;
    };
    checkboxItemCheckbox: {
        marginRight: number;
        alignSelf: string;
    };
};
export default _default;
