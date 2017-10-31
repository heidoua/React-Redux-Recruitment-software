'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _default = require('../../style/themes/default.native');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
    Tabs: {
        container: {
            flex: 1
        },
        topTabBarSplitLine: {
            borderBottomColor: _default2['default'].border_color_base,
            borderBottomWidth: 1
        },
        bottomTabBarSplitLine: {
            borderTopColor: _default2['default'].border_color_base,
            borderTopWidth: 1
        }
    },
    TabBar: {
        container: {},
        tabs: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: _default2['default'].fill_base,
            justifyContent: 'space-around',
            shadowRadius: 0,
            shadowOpacity: 0,
            elevation: 0
        },
        tab: {
            height: _default2['default'].tabs_height,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            flexDirection: 'row'
        },
        underline: {
            height: 2,
            backgroundColor: _default2['default'].tabs_color
        },
        textStyle: {
            fontSize: 15
        },
        activeTextColor: _default2['default'].tabs_color,
        inactiveTextColor: _default2['default'].color_text_base
    }
};
module.exports = exports['default'];