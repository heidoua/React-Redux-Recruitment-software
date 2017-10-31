'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _antdMobile = require('antd-mobile');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:no-console */
/* tslint:disable:no-unused-variable */
exports['default'] = function () {
  return _react2['default'].createElement(
    _antdMobile.WingBlank,
    null,
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      null,
      'default'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { disabled: true },
      'default disabled'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { type: 'primary' },
      'primary'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { type: 'primary', disabled: true },
      'primary disabled'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { type: 'warning' },
      'warning'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { type: 'warning', disabled: true },
      'warning disabled'
    ),
    _react2['default'].createElement(_antdMobile.WhiteSpace, null),
    _react2['default'].createElement(
      _antdMobile.Button,
      { loading: true },
      'loading button'
    ),
    _react2['default'].createElement(
      _antdMobile.WingBlank,
      { style: { marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
      _react2['default'].createElement(
        _antdMobile.Button,
        { type: 'ghost' },
        'ghost'
      ),
      _react2['default'].createElement(
        _antdMobile.Button,
        { type: 'ghost', disabled: true },
        'ghost disabled'
      ),
      _react2['default'].createElement(
        _antdMobile.Button,
        { type: 'ghost', size: 'small' },
        'ghost'
      )
    )
  );
};
/* tslint:enable:no-unused-variable */


module.exports = exports['default'];