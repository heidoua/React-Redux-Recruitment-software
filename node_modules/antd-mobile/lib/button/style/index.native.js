'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    container: {
        flexDirection: 'row'
    },
    defaultHighlight: {
        backgroundColor: _default2['default'].fill_tap,
        borderColor: _default2['default'].border_color_base
    },
    primaryHighlight: {
        backgroundColor: _default2['default'].primary_button_fill_tap,
        borderColor: _default2['default'].primary_button_fill
    },
    ghostHighlight: {
        backgroundColor: 'transparent',
        borderColor: _default2['default'].ghost_button_fill_tap
    },
    warningHighlight: {
        backgroundColor: _default2['default'].warning_button_fill_tap,
        borderColor: _default2['default'].warning_button_fill
    },
    wrapperStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: _default2['default'].radius_md,
        borderWidth: 1
    },
    largeRaw: {
        height: _default2['default'].button_height,
        paddingLeft: _default2['default'].h_spacing_lg,
        paddingRight: _default2['default'].h_spacing_lg
    },
    smallRaw: {
        height: _default2['default'].button_height_sm,
        paddingLeft: _default2['default'].h_spacing_sm,
        paddingRight: _default2['default'].h_spacing_sm
    },
    defaultRaw: {
        backgroundColor: _default2['default'].fill_base,
        borderColor: _default2['default'].border_color_base
    },
    primaryRaw: {
        backgroundColor: _default2['default'].primary_button_fill,
        borderColor: _default2['default'].primary_button_fill
    },
    ghostRaw: {
        backgroundColor: 'transparent',
        borderColor: _default2['default'].ghost_button_color
    },
    warningRaw: {
        backgroundColor: _default2['default'].warning_button_fill,
        borderColor: _default2['default'].warning_button_fill
    },
    defaultDisabledRaw: {
        backgroundColor: _default2['default'].fill_disabled,
        borderColor: _default2['default'].fill_disabled
    },
    primaryDisabledRaw: {
        opacity: 0.4
    },
    ghostDisabledRaw: {
        borderColor: _default2['default'].color_text_base + '1A'
    },
    warningDisabledRaw: {
        opacity: 0.4
    },
    defaultHighlightText: {
        color: _default2['default'].color_text_base
    },
    primaryHighlightText: {
        color: _default2['default'].color_text_base_inverse + '4D'
    },
    ghostHighlightText: {
        color: _default2['default'].ghost_button_fill_tap
    },
    warningHighlightText: {
        color: _default2['default'].color_text_base_inverse + '4D'
    },
    largeRawText: {
        fontSize: _default2['default'].button_font_size
    },
    smallRawText: {
        fontSize: _default2['default'].button_font_size_sm
    },
    defaultRawText: {
        color: _default2['default'].color_text_base
    },
    primaryRawText: {
        color: _default2['default'].color_text_base_inverse
    },
    ghostRawText: {
        color: _default2['default'].ghost_button_color
    },
    warningRawText: {
        color: _default2['default'].color_text_base_inverse
    },
    defaultDisabledRawText: {
        color: _default2['default'].color_text_base + '4D'
    },
    primaryDisabledRawText: {
        color: _default2['default'].color_text_base_inverse + '99'
    },
    ghostDisabledRawText: {
        color: _default2['default'].color_text_base + '1A'
    },
    warningDisabledRawText: {
        color: _default2['default'].color_text_base_inverse + '99'
    },
    indicator: {
        marginRight: _default2['default'].h_spacing_md
    }
};
module.exports = exports['default'];