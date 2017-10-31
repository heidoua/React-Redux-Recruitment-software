'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    card: {
        borderWidth: _default2['default'].border_width_md,
        borderColor: _default2['default'].border_color_base,
        borderRadius: _default2['default'].radius_md,
        paddingBottom: _default2['default'].v_spacing_sm,
        flexDirection: 'column',
        backgroundColor: _default2['default'].fill_base
    },
    full: {
        borderRadius: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0
    },
    headerWrap: {
        flexDirection: 'row',
        paddingVertical: _default2['default'].v_spacing_sm,
        paddingRight: _default2['default'].h_spacing_lg,
        marginLeft: _default2['default'].h_spacing_lg,
        alignItems: 'center'
    },
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerImage: {
        marginRight: _default2['default'].h_spacing_sm
    },
    headerContent: {
        color: _default2['default'].color_text_base,
        fontSize: _default2['default'].font_size_heading,
        flex: 1
    },
    headerExtra: {
        flex: 1,
        fontSize: _default2['default'].font_size_heading,
        color: _default2['default'].color_text_caption,
        textAlign: 'right'
    },
    body: {
        flexGrow: 1,
        paddingVertical: _default2['default'].v_spacing_md,
        minHeight: 48,
        borderTopWidth: _default2['default'].border_width_md,
        borderColor: _default2['default'].border_color_base
    },
    footerWrap: {
        flexDirection: 'row',
        paddingHorizontal: _default2['default'].h_spacing_lg
    },
    footerContent: {
        flex: 1,
        fontSize: _default2['default'].font_size_base,
        color: _default2['default'].color_text_caption
    },
    footerExtra: {
        textAlign: 'right',
        fontSize: _default2['default'].font_size_base,
        color: _default2['default'].color_text_caption
    }
};
module.exports = exports['default'];