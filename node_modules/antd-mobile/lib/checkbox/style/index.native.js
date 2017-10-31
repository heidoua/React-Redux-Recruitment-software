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
        width: _default2['default'].icon_size_sm,
        height: _default2['default'].icon_size_sm
    },
    iconRight: {
        marginLeft: _default2['default'].h_spacing_md
    },
    agreeItem: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    agreeItemCheckbox: {
        marginLeft: _default2['default'].h_spacing_lg,
        marginRight: _default2['default'].h_spacing_md
    },
    checkboxItemCheckbox: {
        marginRight: _default2['default'].h_spacing_md,
        alignSelf: 'center'
    }
};
module.exports = exports['default'];