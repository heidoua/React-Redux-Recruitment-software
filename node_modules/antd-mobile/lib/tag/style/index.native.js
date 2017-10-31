'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    tag: {
        borderRadius: _default2['default'].radius_sm,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        overflow: 'visible'
    },
    wrap: {
        overflow: 'hidden',
        borderRadius: _default2['default'].radius_sm,
        borderWidth: _default2['default'].border_width_sm,
        borderStyle: 'solid',
        paddingVertical: _default2['default'].v_spacing_sm,
        paddingHorizontal: _default2['default'].h_spacing_lg
    },
    wrapSmall: {
        paddingVertical: 1.5,
        paddingHorizontal: _default2['default'].h_spacing_sm
    },
    text: {
        fontSize: _default2['default'].button_font_size_sm,
        textAlign: 'center'
    },
    textSmall: {
        fontSize: _default2['default'].font_size_icontext
    },
    normalWrap: {
        backgroundColor: _default2['default'].fill_base,
        borderColor: _default2['default'].border_color_base
    },
    normalText: {
        color: _default2['default'].color_text_caption
    },
    activeWrap: {
        backgroundColor: _default2['default'].fill_base,
        borderColor: _default2['default'].brand_primary
    },
    activeText: {
        color: _default2['default'].color_link
    },
    disabledWrap: {
        backgroundColor: _default2['default'].fill_disabled,
        borderWidth: 0
    },
    disabledText: {
        color: _default2['default'].color_text_disabled
    },
    close: {
        position: 'absolute',
        backgroundColor: _default2['default'].color_text_placeholder
    },
    closeIOS: {
        borderRadius: 8,
        width: 16,
        height: 16,
        left: -5,
        top: -4,
        overflow: 'hidden'
    },
    closeAndroid: {
        width: 16,
        height: 32,
        left: -2,
        top: -10,
        transform: [{
            rotate: '45deg'
        }]
    },
    closeText: {
        color: _default2['default'].color_text_base_inverse,
        textAlign: 'center',
        fontSize: 20,
        lineHeight: 18
    },
    closeTransform: {
        transform: [{
            rotate: '-45deg'
        }]
    }
};
module.exports = exports['default'];