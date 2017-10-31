'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    grayBorderBox: {
        borderColor: _default2['default'].border_color_base
    },
    icon: {
        width: _default2['default'].icon_size_md,
        height: _default2['default'].icon_size_md
    },
    text: {
        fontSize: _default2['default'].font_size_caption_sm,
        color: _default2['default'].color_text_base,
        marginTop: _default2['default'].v_spacing_md
    }
};
module.exports = exports['default'];