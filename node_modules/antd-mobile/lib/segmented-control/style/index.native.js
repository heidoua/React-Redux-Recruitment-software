'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactNative = require('react-native');

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    segment: {
        flexDirection: 'row',
        overflow: 'hidden',
        borderWidth: _reactNative.StyleSheet.hairlineWidth,
        borderColor: _default2['default'].brand_primary,
        borderRadius: _default2['default'].radius_md
    },
    item: {
        flex: 1,
        paddingVertical: _default2['default'].h_spacing_sm,
        borderLeftWidth: _reactNative.StyleSheet.hairlineWidth,
        borderRightWidth: _reactNative.StyleSheet.hairlineWidth,
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemLeftRadius: {
        borderTopLeftRadius: _default2['default'].radius_md,
        borderBottomLeftRadius: _default2['default'].radius_md
    },
    itemRightRadius: {
        borderTopRightRadius: _default2['default'].radius_md,
        borderBottomRightRadius: _default2['default'].radius_md
    },
    itemText: {
        textAlign: 'center',
        fontSize: _default2['default'].font_size_caption_sm
    }
};
module.exports = exports['default'];