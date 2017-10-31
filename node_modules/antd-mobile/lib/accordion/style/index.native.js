'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// wait for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/18278
// them below any and change to IAccordionStyle
exports['default'] = _reactNative.StyleSheet.create({
    container: {
        borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
        borderTopColor: _default2['default'].border_color_base
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: _default2['default'].h_spacing_lg,
        paddingRight: 2 * _default2['default'].h_spacing_lg,
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: _default2['default'].border_color_base
    },
    arrow: {
        width: 12,
        height: 12
    },
    headerWrap: {
        flex: 1,
        height: _default2['default'].list_item_height,
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        color: _default2['default'].color_text_base,
        fontSize: _default2['default'].font_size_heading
    },
    content: {
        paddingVertical: _default2['default'].v_spacing_md,
        paddingHorizontal: _default2['default'].h_spacing_md,
        borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
        borderBottomColor: _default2['default'].border_color_base
    },
    contentText: {
        fontSize: _default2['default'].font_size_subhead,
        color: _default2['default'].color_text_paragraph
    }
});
module.exports = exports['default'];