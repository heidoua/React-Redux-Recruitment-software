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

var _reactNative = require('react-native');

var _Accordion = require('react-native-collapsible/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _index = require('./style/index.native');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* tslint:disable:jsx-no-multiline-js */
var AccordionPanel = function (_React$Component) {
    (0, _inherits3['default'])(AccordionPanel, _React$Component);

    function AccordionPanel() {
        (0, _classCallCheck3['default'])(this, AccordionPanel);
        return (0, _possibleConstructorReturn3['default'])(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).apply(this, arguments));
    }

    (0, _createClass3['default'])(AccordionPanel, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return AccordionPanel;
}(_react2['default'].Component);

var Accordion = function (_React$Component2) {
    (0, _inherits3['default'])(Accordion, _React$Component2);

    function Accordion() {
        (0, _classCallCheck3['default'])(this, Accordion);

        var _this2 = (0, _possibleConstructorReturn3['default'])(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));

        _this2._renderHeader = function (section, _, isActive) {
            var styles = _this2.props.styles;
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [styles.header, section.style] },
                _react2['default'].isValidElement(section.title) ? section.title : _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.headerWrap },
                    _react2['default'].createElement(
                        _reactNative.Text,
                        { style: styles.headerText },
                        section.title
                    )
                ),
                _react2['default'].createElement(
                    _reactNative.View,
                    { style: styles.arrow },
                    _react2['default'].createElement(_reactNative.Image, { source: isActive ? require('./style/assets/up.png') : require('./style/assets/down.png'), style: styles.arrow })
                )
            );
        };
        _this2._renderContent = function (section) {
            var styles = _this2.props.styles;
            return _react2['default'].isValidElement(section.content) ? section.content : _react2['default'].createElement(
                _reactNative.View,
                { style: styles.content },
                _react2['default'].createElement(
                    _reactNative.Text,
                    { style: styles.contentText },
                    section.content
                )
            );
        };
        _this2.onChange = function (idx) {
            var _this2$props = _this2.props,
                onChange = _this2$props.onChange,
                children = _this2$props.children;

            var key = void 0;
            _react2['default'].Children.map(children, function (child, index) {
                if (idx === index) {
                    key = child.key || '' + index;
                }
            });
            if (onChange) {
                onChange(key);
            }
        };
        return _this2;
    }

    (0, _createClass3['default'])(Accordion, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                defaultActiveKey = _props.defaultActiveKey,
                activeKey = _props.activeKey;

            var styles = this.props.styles;
            var defaultActiveSection = void 0;
            var activeSection = void 0;
            var headers = _react2['default'].Children.map(children, function (child, index) {
                var key = child.key || '' + index;
                if (key === defaultActiveKey) {
                    defaultActiveSection = index;
                }
                if (key === activeKey) {
                    activeSection = index;
                }
                return {
                    title: child.props.header,
                    content: child.props.children,
                    style: child.props.style || {}
                };
            });
            return _react2['default'].createElement(
                _reactNative.View,
                { style: [style, styles.container] },
                _react2['default'].createElement(_Accordion2['default'], { initiallyActiveSection: defaultActiveSection, activeSection: activeSection, underlayColor: 'transparent', sections: headers, renderHeader: this._renderHeader, renderContent: this._renderContent, duration: 0, onChange: this.onChange })
            );
        }
    }]);
    return Accordion;
}(_react2['default'].Component);

Accordion.defaultProps = {
    styles: _index2['default']
};
Accordion.Panel = AccordionPanel;
exports['default'] = Accordion;
module.exports = exports['default'];