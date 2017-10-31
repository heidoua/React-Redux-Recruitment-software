import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { defaultProps } from './PropsType';
import SearchBarStyle from './style/index.native';
import { getComponentLocale } from '../_util/getLocale';
var SearchBarStyles = StyleSheet.create(SearchBarStyle);

var SearchBar = function (_React$Component) {
    _inherits(SearchBar, _React$Component);

    function SearchBar(props) {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

        _this.onSubmit = function (e) {
            e.preventDefault();
            if (_this.props.onSubmit) {
                _this.props.onSubmit(_this.state.value);
            }
        };
        _this.onChangeText = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            if (_this.props.onChange) {
                _this.props.onChange(value);
            }
        };
        _this.onCancel = function () {
            if (_this.props.onCancel) {
                _this.props.onCancel(_this.state.value);
            }
        };
        _this.onFocus = function () {
            _this.setState({
                focus: true
            });
            if (_this.props.onFocus) {
                _this.props.onFocus();
            }
        };
        _this.onBlur = function () {
            _this.setState({
                focus: false
            });
            if (_this.props.onBlur) {
                _this.props.onBlur();
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            value = '';
        }
        _this.state = {
            value: value,
            focus: false
        };
        return _this;
    }

    _createClass(SearchBar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _a = this.props,
                showCancelButton = _a.showCancelButton,
                styles = _a.styles,
                propsValue = _a.value,
                cancelText = _a.cancelText,
                onChangeText = _a.onChangeText,
                onChange = _a.onChange,
                onSubmitEditing = _a.onSubmitEditing,
                disabled = _a.disabled,
                restProps = __rest(_a, ["showCancelButton", "styles", "value", "cancelText", "onChangeText", "onChange", "onSubmitEditing", "disabled"]);
            var _locale = getComponentLocale(this.props, this.context, 'SearchBar', function () {
                return require('./locale/zh_CN');
            });
            var style = restProps.style;
            var _state = this.state,
                value = _state.value,
                focus = _state.focus;

            var _showCancelButton = showCancelButton || focus;
            return React.createElement(
                View,
                { style: styles.wrapper },
                React.createElement(
                    View,
                    { style: styles.inputWrapper },
                    React.createElement(TextInput, _extends({ value: value, onChangeText: this.onChangeText, style: [styles.input, style], editable: !disabled, ref: function ref(el) {
                            return _this2.inputRef = el;
                        }, onSubmitEditing: this.onSubmit, clearButtonMode: 'always', underlineColorAndroid: 'transparent' }, restProps, { onFocus: this.onFocus, onBlur: this.onBlur }))
                ),
                React.createElement(Image, { source: require('../style/images/search.png'), style: styles.search, resizeMode: 'stretch' }),
                _showCancelButton && React.createElement(
                    View,
                    { style: styles.cancelTextContainer },
                    React.createElement(
                        Text,
                        { style: styles.cancelText, onPress: this.onCancel },
                        cancelText || _locale.cancelText
                    )
                )
            );
        }
    }]);

    return SearchBar;
}(React.Component);

export default SearchBar;

SearchBar.defaultProps = _extends({}, defaultProps, { styles: SearchBarStyles });
SearchBar.contextTypes = {
    antLocale: PropTypes.object
};