'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    pagination: {
        position: 'absolute',
        alignItems: 'center'
    },
    paginationX: {
        bottom: 10,
        left: 0,
        right: 0
    },
    paginationY: {
        right: 10,
        top: 0,
        bottom: 0
    },
    pointStyle: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: _default2['default'].color_icon_base
    },
    pointActiveStyle: {
        backgroundColor: '#888'
    },
    spaceStyle: {
        marginHorizontal: _default2['default'].h_spacing_sm / 2,
        marginVertical: _default2['default'].v_spacing_sm / 2
    }
};
module.exports = exports['default'];