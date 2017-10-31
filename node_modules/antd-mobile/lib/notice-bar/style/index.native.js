'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    notice: {
        backgroundColor: _default2['default'].notice_bar_fill,
        height: _default2['default'].notice_bar_height,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        marginRight: _default2['default'].h_spacing_lg,
        overflow: 'hidden',
        width: 0
    },
    content: {
        fontSize: _default2['default'].font_size_subhead,
        color: _default2['default'].brand_warning
    },
    left6: {
        marginLeft: _default2['default'].h_spacing_sm
    },
    left15: {
        marginLeft: _default2['default'].h_spacing_lg
    },
    actionWrap: {
        marginRight: _default2['default'].h_spacing_lg
    },
    close: {
        color: _default2['default'].brand_warning,
        fontSize: 18,
        fontWeight: '200',
        textAlign: 'left'
    },
    link: {
        transform: [{ rotate: '225deg' }],
        color: _default2['default'].brand_warning,
        fontSize: _default2['default'].font_size_icontext,
        fontWeight: '500',
        textAlign: 'left'
    }
};
module.exports = exports['default'];