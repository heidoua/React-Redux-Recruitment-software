'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    inputWrapper: {
        flex: 1,
        flexDirection: 'row'
    },
    input: {
        borderRadius: _default2['default'].radius_md,
        backgroundColor: '#fff',
        borderColor: _default2['default'].border_color_base,
        borderWidth: _default2['default'].border_width_sm,
        height: _default2['default'].search_bar_input_height,
        color: _default2['default'].color_text_base,
        fontSize: _default2['default'].font_size_base,
        paddingLeft: _default2['default'].h_spacing_lg + _default2['default'].icon_size_xxs + _default2['default'].h_spacing_sm,
        paddingRight: _default2['default'].h_spacing_lg + _default2['default'].icon_size_xxs + _default2['default'].h_spacing_sm,
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0
    },
    wrapper: {
        backgroundColor: _default2['default'].search_bar_fill,
        height: _default2['default'].search_bar_height,
        paddingLeft: _default2['default'].h_spacing_md,
        paddingRight: _default2['default'].h_spacing_md,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cancelTextContainer: {
        height: _default2['default'].search_bar_input_height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cancelText: {
        fontSize: _default2['default'].link_button_font_size,
        color: _default2['default'].color_link,
        paddingLeft: _default2['default'].h_spacing_lg
    },
    search: {
        tintColor: _default2['default'].input_color_icon,
        position: 'absolute',
        left: _default2['default'].h_spacing_md + 8,
        top: (_default2['default'].search_bar_height - _default2['default'].icon_size_xxs) / 2,
        width: _default2['default'].icon_size_xxs,
        height: _default2['default'].icon_size_xxs
    }
};
module.exports = exports['default'];