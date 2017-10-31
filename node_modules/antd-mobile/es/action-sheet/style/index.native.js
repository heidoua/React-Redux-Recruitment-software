import variables from '../../style/themes/default.native';
import { StyleSheet } from 'react-native';
export var vars = variables;
export default StyleSheet.create({
    container: {
        zIndex: vars.action_sheet_zindex
    },
    wrap: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
    },
    content: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: variables.fill_base
    },
    mask: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: variables.fill_mask
    },
    title: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: variables.h_spacing_lg,
        marginBottom: variables.h_spacing_lg
    },
    titleText: {
        fontWeight: '500'
    },
    message: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: variables.h_spacing_lg
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: variables.actionsheet_item_height,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: variables.border_color_base,
        backgroundColor: 'white'
    },
    cancelBtn: {
        marginTop: variables.v_spacing_md,
        position: 'relative'
    },
    cancelBtnMask: {
        position: 'absolute',
        top: -variables.v_spacing_md,
        left: 0,
        right: 0,
        height: variables.v_spacing_md,
        backgroundColor: variables.fill_grey,
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: variables.border_color_base
    },
    destructiveBtn: {
        color: variables.brand_error,
        fontSize: variables.actionsheet_item_font_size
    }
});