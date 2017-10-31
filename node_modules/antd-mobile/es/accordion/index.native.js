import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import { View, Text, Image } from 'react-native';
import RNAccordion from 'react-native-collapsible/Accordion';
import AccordionStyle from './style/index.native';

var AccordionPanel = function (_React$Component) {
    _inherits(AccordionPanel, _React$Component);

    function AccordionPanel() {
        _classCallCheck(this, AccordionPanel);

        return _possibleConstructorReturn(this, (AccordionPanel.__proto__ || Object.getPrototypeOf(AccordionPanel)).apply(this, arguments));
    }

    _createClass(AccordionPanel, [{
        key: 'render',
        value: function render() {
            return null;
        }
    }]);

    return AccordionPanel;
}(React.Component);

var Accordion = function (_React$Component2) {
    _inherits(Accordion, _React$Component2);

    function Accordion() {
        _classCallCheck(this, Accordion);

        var _this2 = _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));

        _this2._renderHeader = function (section, _, isActive) {
            var styles = _this2.props.styles;
            return React.createElement(
                View,
                { style: [styles.header, section.style] },
                React.isValidElement(section.title) ? section.title : React.createElement(
                    View,
                    { style: styles.headerWrap },
                    React.createElement(
                        Text,
                        { style: styles.headerText },
                        section.title
                    )
                ),
                React.createElement(
                    View,
                    { style: styles.arrow },
                    React.createElement(Image, { source: isActive ? require('./style/assets/up.png') : require('./style/assets/down.png'), style: styles.arrow })
                )
            );
        };
        _this2._renderContent = function (section) {
            var styles = _this2.props.styles;
            return React.isValidElement(section.content) ? section.content : React.createElement(
                View,
                { style: styles.content },
                React.createElement(
                    Text,
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
            React.Children.map(children, function (child, index) {
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

    _createClass(Accordion, [{
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
            var headers = React.Children.map(children, function (child, index) {
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
            return React.createElement(
                View,
                { style: [style, styles.container] },
                React.createElement(RNAccordion, { initiallyActiveSection: defaultActiveSection, activeSection: activeSection, underlayColor: 'transparent', sections: headers, renderHeader: this._renderHeader, renderContent: this._renderContent, duration: 0, onChange: this.onChange })
            );
        }
    }]);

    return Accordion;
}(React.Component);

Accordion.defaultProps = {
    styles: AccordionStyle
};
Accordion.Panel = AccordionPanel;
export default Accordion;