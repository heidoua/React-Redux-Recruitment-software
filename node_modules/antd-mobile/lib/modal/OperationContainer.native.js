'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var OperationContainer = function (_React$Component) {
    (0, _inherits3['default'])(OperationContainer, _React$Component);

    function OperationContainer(props) {
        (0, _classCallCheck3['default'])(this, OperationContainer);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (OperationContainer.__proto__ || Object.getPrototypeOf(OperationContainer)).call(this, props));

        _this.onClose = function () {
            _this.setState({
                visible: false
            });
        };
        _this.state = {
            visible: true
        };
        return _this;
    }

    (0, _createClass3['default'])(OperationContainer, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                actions = _props.actions,
                onAnimationEnd = _props.onAnimationEnd;

            var footer = actions.map(function (button) {
                var orginPress = button.onPress || function () {};
                button.onPress = function () {
                    var res = orginPress();
                    if (res && res.then) {
                        res.then(function () {
                            _this2.onClose();
                        });
                    } else {
                        _this2.onClose();
                    }
                };
                return button;
            });
            return _react2['default'].createElement(_Modal2['default'], { operation: true, transparent: true, maskClosable: true, visible: this.state.visible, onClose: this.onClose, onAnimationEnd: onAnimationEnd, style: _index2['default'].operationContainer, bodyStyle: _index2['default'].operationBody, footer: footer });
        }
    }]);
    return OperationContainer;
}(_react2['default'].Component);

exports['default'] = OperationContainer;
module.exports = exports['default'];