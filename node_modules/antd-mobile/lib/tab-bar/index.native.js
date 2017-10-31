'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _tabbar = require('./tabbar.ios');

var _tabbar2 = _interopRequireDefault(_tabbar);

var _tabbar3 = require('./tabbar.android');

var _tabbar4 = _interopRequireDefault(_tabbar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _reactNative.Platform.OS === 'ios' ? _tabbar2['default'] : _tabbar4['default'];
module.exports = exports['default'];