'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = PopupMixin;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function PopupMixin(getModal, platformProps) {
    return _a = function (_React$Component) {
        (0, _inherits3['default'])(_a, _React$Component);

        function _a(props) {
            (0, _classCallCheck3['default'])(this, _a);

            var _this = (0, _possibleConstructorReturn3['default'])(this, (_a.__proto__ || Object.getPrototypeOf(_a)).call(this, props));

            _this.onPickerChange = function (pickerValue) {
                if (_this.state.pickerValue !== pickerValue) {
                    _this.setState({
                        pickerValue: pickerValue
                    });
                    var _this$props = _this.props,
                        picker = _this$props.picker,
                        pickerValueChangeProp = _this$props.pickerValueChangeProp;

                    if (picker && picker.props[pickerValueChangeProp]) {
                        picker.props[pickerValueChangeProp](pickerValue);
                    }
                }
            };
            _this.saveRef = function (picker) {
                _this.picker = picker;
            };
            _this.onTriggerClick = function (e) {
                var child = _this.props.children;
                var childProps = child.props || {};
                if (childProps[_this.props.triggerType]) {
                    childProps[_this.props.triggerType](e);
                }
                _this.fireVisibleChange(!_this.state.visible);
            };
            _this.onOk = function () {
                _this.props.onOk(_this.picker && _this.picker.getValue());
                _this.fireVisibleChange(false);
            };
            _this.getContent = function () {
                if (_this.props.picker) {
                    var _React$cloneElement;

                    var pickerValue = _this.state.pickerValue;

                    if (pickerValue === null) {
                        pickerValue = _this.props.value;
                    }
                    return _react2['default'].cloneElement(_this.props.picker, (_React$cloneElement = {}, (0, _defineProperty3['default'])(_React$cloneElement, _this.props.pickerValueProp, pickerValue), (0, _defineProperty3['default'])(_React$cloneElement, _this.props.pickerValueChangeProp, _this.onPickerChange), (0, _defineProperty3['default'])(_React$cloneElement, 'ref', _this.saveRef), _React$cloneElement));
                } else {
                    return _this.props.content;
                }
            };
            _this.onDismiss = function () {
                _this.props.onDismiss();
                _this.fireVisibleChange(false);
            };
            _this.hide = function () {
                _this.fireVisibleChange(false);
            };
            _this.state = {
                pickerValue: 'value' in _this.props ? _this.props.value : null,
                visible: _this.props.visible || false
            };
            return _this;
        }

        (0, _createClass3['default'])(_a, [{
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if ('value' in nextProps) {
                    this.setState({
                        pickerValue: nextProps.value
                    });
                }
                if ('visible' in nextProps) {
                    this.setVisibleState(nextProps.visible);
                }
            }
        }, {
            key: 'setVisibleState',
            value: function setVisibleState(visible) {
                this.setState({
                    visible: visible
                });
                if (!visible) {
                    this.setState({
                        pickerValue: null
                    });
                }
            }
        }, {
            key: 'fireVisibleChange',
            value: function fireVisibleChange(visible) {
                if (this.state.visible !== visible) {
                    if (!('visible' in this.props)) {
                        this.setVisibleState(visible);
                    }
                    this.props.onVisibleChange(visible);
                }
            }
        }, {
            key: 'getRender',
            value: function getRender() {
                var props = this.props;
                var children = props.children;
                if (!children) {
                    return getModal(props, this.state.visible, {
                        getContent: this.getContent,
                        onOk: this.onOk,
                        hide: this.hide,
                        onDismiss: this.onDismiss
                    });
                }
                var _props = this.props,
                    WrapComponent = _props.WrapComponent,
                    disabled = _props.disabled;

                var child = children;
                var newChildProps = {};
                if (!disabled) {
                    newChildProps[props.triggerType] = this.onTriggerClick;
                }
                return _react2['default'].createElement(
                    WrapComponent,
                    { style: props.wrapStyle },
                    _react2['default'].cloneElement(child, newChildProps),
                    getModal(props, this.state.visible, {
                        getContent: this.getContent,
                        onOk: this.onOk,
                        hide: this.hide,
                        onDismiss: this.onDismiss
                    })
                );
            }
        }, {
            key: 'render',
            value: function render() {
                return this.getRender();
            }
        }]);
        return _a;
    }(_react2['default'].Component), _a.defaultProps = (0, _extends3['default'])({
        onVisibleChange: function onVisibleChange(_) {},
        okText: 'Ok', dismissText: 'Dismiss', title: '', onOk: function onOk(_) {},
        onDismiss: function onDismiss() {}
    }, platformProps), _a;
    var _a;
}
module.exports = exports['default'];