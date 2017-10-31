'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: _default2['default'].icon_size_xxs,
        height: _default2['default'].icon_size_xxs * 0.8
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    radioItemRadio: {
        marginLeft: _default2['default'].h_spacing_lg,
        marginRight: _default2['default'].h_spacing_md
    },
    radioItemContent: {
        color: _default2['default'].color_text_base,
        fontSize: _default2['default'].font_size_heading
    },
    radioItemContentDisable: {
        color: _default2['default'].color_text_disabled
    }
};
module.exports = exports['default'];