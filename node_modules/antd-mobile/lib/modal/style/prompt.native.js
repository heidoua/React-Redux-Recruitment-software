'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    message: {
        marginTop: _default2['default'].v_spacing_lg,
        color: _default2['default'].color_text_caption,
        fontSize: _default2['default'].font_size_base,
        textAlign: 'center'
    },
    inputGroup: {
        marginTop: _default2['default'].v_spacing_md,
        flexDirection: 'column'
    },
    inputWrapper: {
        borderWidth: _reactNative.StyleSheet.hairlineWidth,
        borderTopWidth: 0,
        borderColor: _default2['default'].border_color_base
    },
    input: {
        height: 36,
        fontSize: _default2['default'].font_size_base,
        paddingHorizontal: _default2['default'].h_spacing_sm,
        paddingVertical: 0
    },
    inputFirst: {
        borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
        borderTopLeftRadius: _default2['default'].radius_sm,
        borderTopRightRadius: _default2['default'].radius_sm
    },
    inputLast: {
        borderBottomLeftRadius: _default2['default'].radius_sm,
        borderBottomRightRadius: _default2['default'].radius_sm
    }
};
module.exports = exports['default'];