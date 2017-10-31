'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    container: {
        position: 'absolute',
        top: _reactNative.Platform.OS === 'ios' ? 64 : 54,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: _default2['default'].toast_zindex
    },
    innerContainer: {
        backgroundColor: 'transparent'
    },
    innerWrap: {
        alignItems: 'center',
        backgroundColor: _default2['default'].toast_fill,
        minWidth: 100
    },
    iconToast: {
        borderRadius: _default2['default'].radius_lg,
        padding: _default2['default'].v_spacing_lg
    },
    textToast: {
        borderRadius: _default2['default'].radius_sm,
        paddingVertical: _default2['default'].v_spacing_md,
        paddingHorizontal: _default2['default'].v_spacing_lg
    },
    content: {
        color: _default2['default'].color_text_base_inverse,
        fontSize: _default2['default'].font_size_subhead
    },
    image: {
        width: _default2['default'].icon_size_lg,
        height: _default2['default'].icon_size_lg,
        marginBottom: _default2['default'].v_spacing_xs
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: _default2['default'].v_spacing_md
    }
};
module.exports = exports['default'];