'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

var _segmented = require('./segmented.ios');

var _segmented2 = _interopRequireDefault(_segmented);

var _segmented3 = require('./segmented.android');

var _segmented4 = _interopRequireDefault(_segmented3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _reactNative.Platform.OS === 'ios' ? _segmented2['default'] : _segmented4['default'];
module.exports = exports['default'];