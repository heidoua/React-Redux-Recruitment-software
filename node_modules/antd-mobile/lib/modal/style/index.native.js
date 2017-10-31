'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    container: {
        zIndex: _default2['default'].modal_zindex
    },
    wrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    popupContainer: {},
    popupSlideUp: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    popupSlideDown: {},
    innerContainer: {
        borderRadius: _default2['default'].radius_md,
        width: 286,
        paddingTop: _default2['default'].v_spacing_xl,
        overflow: 'hidden'
    },
    // fix android borderRadius
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderBottomLeftRadius: _default2['default'].radius_md,
        borderBottomRightRadius: _default2['default'].radius_md
    },
    header: {
        fontSize: _default2['default'].modal_font_size_heading,
        color: _default2['default'].color_text_base,
        textAlign: 'center',
        paddingHorizontal: _default2['default'].h_spacing_lg
    },
    body: {
        paddingTop: 0,
        paddingBottom: _default2['default'].v_spacing_lg,
        paddingHorizontal: _default2['default'].h_spacing_lg
    },
    maskClosable: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent'
    },
    closeWrap: {
        position: 'absolute',
        top: 0,
        left: _default2['default'].h_spacing_lg
    },
    close: {
        fontSize: 40,
        fontWeight: '200',
        color: '#bcbcbc',
        lineHeight: 30
    },
    buttonGroupH: {
        flexGrow: 1,
        flexDirection: 'row'
    },
    buttonGroupV: {
        flexGrow: 1,
        flexDirection: 'column'
    },
    buttonWrapH: {
        height: _default2['default'].modal_button_height,
        flexGrow: 1,
        borderColor: _default2['default'].border_color_base,
        borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
        borderRightWidth: _reactNative.StyleSheet.hairlineWidth,
        paddingVertical: 11
    },
    buttonWrapV: {
        flexGrow: 1,
        borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
        borderColor: _default2['default'].border_color_base,
        paddingVertical: 11
    },
    buttonText: {
        textAlign: 'center',
        color: _default2['default'].color_link,
        fontSize: _default2['default'].modal_button_font_size,
        backgroundColor: 'transparent'
    },
    operationContainer: {
        paddingTop: 0
    },
    operationBody: {
        paddingBottom: 0,
        paddingHorizontal: 0
    },
    buttonTextOperation: {
        color: _default2['default'].color_text_base,
        textAlign: 'left',
        paddingHorizontal: 15
    }
};
module.exports = exports['default'];