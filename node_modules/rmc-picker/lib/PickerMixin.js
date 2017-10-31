'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = function (ComposedComponent) {
    return _a = function (_React$Component) {
        (0, _inherits3['default'])(_a, _React$Component);

        function _a() {
            (0, _classCallCheck3['default'])(this, _a);

            var _this = (0, _possibleConstructorReturn3['default'])(this, (_a.__proto__ || Object.getPrototypeOf(_a)).apply(this, arguments));

            _this.select = function (value, itemHeight, scrollTo) {
                var children = _react2['default'].Children.toArray(_this.props.children);
                for (var i = 0, len = children.length; i < len; i++) {
                    if (children[i].props.value === value) {
                        _this.selectByIndex(i, itemHeight, scrollTo);
                        return;
                    }
                }
                _this.selectByIndex(0, itemHeight, scrollTo);
            };
            _this.doScrollingComplete = function (top, itemHeight, fireValueChange) {
                var children = _react2['default'].Children.toArray(_this.props.children);
                var index = _this.coumputeChildIndex(top, itemHeight, children.length);
                var child = children[index];
                if (child) {
                    fireValueChange(child.props.value);
                } else if (console.warn) {
                    console.warn('child not found', children, index);
                }
            };
            return _this;
        }

        (0, _createClass3['default'])(_a, [{
            key: 'selectByIndex',
            value: function selectByIndex(index, itemHeight, zscrollTo) {
                if (index < 0 || index >= _react2['default'].Children.count(this.props.children) || !itemHeight) {
                    return;
                }
                zscrollTo(index * itemHeight);
            }
        }, {
            key: 'coumputeChildIndex',
            value: function coumputeChildIndex(top, itemHeight, childrenLength) {
                var index = top / itemHeight;
                var floor = Math.floor(index);
                if (index - floor > 0.5) {
                    index = floor + 1;
                } else {
                    index = floor;
                }
                return Math.min(index, childrenLength - 1);
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2['default'].createElement(ComposedComponent, (0, _extends3['default'])({}, this.props, { doScrollingComplete: this.doScrollingComplete, coumputeChildIndex: this.coumputeChildIndex, select: this.select }));
            }
        }]);
        return _a;
    }(_react2['default'].Component), _a.Item = Item, _a;
    var _a;
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Item = function Item(_props) {
    return null;
}; /* tslint:disable:no-console */
module.exports = exports['default'];