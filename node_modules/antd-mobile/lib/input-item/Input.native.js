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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Input = function (_React$Component) {
    (0, _inherits3['default'])(Input, _React$Component);

    function Input(props) {
        (0, _classCallCheck3['default'])(this, Input);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        _this.state = {
            focused: props.focused || false
        };
        return _this;
    }

    (0, _createClass3['default'])(Input, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.focused !== this.state.focused) {
                this.setState({
                    focused: nextProps.focused
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.autoFocus || this.props.focused) {
                this.inputRef.focus();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.props.focused) {
                this.inputRef.focus();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2['default'].createElement(_reactNative.TextInput, (0, _extends3['default'])({ ref: function ref(el) {
                    return _this2.inputRef = el;
                }, underlineColorAndroid: 'transparent' }, this.props));
        }
    }]);
    return Input;
}(_react2['default'].Component);

exports['default'] = Input;
module.exports = exports['default'];