'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    totalStyle: {
        fontSize: 18,
        color: _default2['default'].color_text_base
    },
    activeTextStyle: {
        fontSize: 18,
        color: _default2['default'].color_link
    },
    indicatorStyle: {
        flexDirection: 'row'
    },
    pointStyle: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: _default2['default'].input_color_icon
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