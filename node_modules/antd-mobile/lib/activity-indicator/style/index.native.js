'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: _default2['default'].toast_zindex
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 89,
        height: 89,
        borderRadius: _default2['default'].radius_md,
        backgroundColor: _default2['default'].toast_fill
    },
    tip: {
        color: _default2['default'].color_text_base,
        fontSize: _default2['default'].font_size_base,
        marginLeft: _default2['default'].h_spacing_md
    },
    toast: {
        color: _default2['default'].color_text_base_inverse,
        fontSize: _default2['default'].font_size_base,
        marginTop: _default2['default'].v_spacing_sm
    },
    spinner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
module.exports = exports['default'];