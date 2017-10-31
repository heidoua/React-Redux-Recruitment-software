import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
/* tslint:disable:no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { TextareaItem, List } from 'antd-mobile';

var BasicTextAreaItemExample = function (_React$Component) {
    _inherits(BasicTextAreaItemExample, _React$Component);

    function BasicTextAreaItemExample(props) {
        _classCallCheck(this, BasicTextAreaItemExample);

        var _this = _possibleConstructorReturn(this, (BasicTextAreaItemExample.__proto__ || Object.getPrototypeOf(BasicTextAreaItemExample)).call(this, props));

        _this.onChange = function (val) {
            // console.log(val);
            _this.setState({ val: val });
        };
        _this.state = {
            val: '默认带value'
        };
        return _this;
    }

    _createClass(BasicTextAreaItemExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                ScrollView,
                { style: { flex: 1 }, automaticallyAdjustContentInsets: false, showsHorizontalScrollIndicator: false, showsVerticalScrollIndicator: false },
                React.createElement(
                    List,
                    { renderHeader: function renderHeader() {
                            return '基本';
                        } },
                    React.createElement(TextareaItem, { rows: 4, placeholder: '\u56FA\u5B9A\u884C\u6570' }),
                    React.createElement(TextareaItem, { rows: 4, placeholder: '\u591A\u884C\u5E26\u8BA1\u6570', count: 100 }),
                    React.createElement(TextareaItem, { rows: 4, placeholder: '\u9AD8\u5EA6\u81EA\u9002\u5E94', autoHeight: true }),
                    React.createElement(TextareaItem, { value: this.state.val, onChange: this.onChange }),
                    React.createElement(TextareaItem, { value: '\u4E0D\u53EF\u7F16\u8F91 editable = {false}', editable: false }),
                    React.createElement(TextareaItem, { clear: false, placeholder: '\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE' }),
                    React.createElement(TextareaItem, { error: true, defaultValue: '\u62A5\u9519\u6837\u5F0F error={true}', onErrorClick: function onErrorClick() {
                            return console.log('err');
                        } })
                )
            );
        }
    }]);

    return BasicTextAreaItemExample;
}(React.Component);

export default BasicTextAreaItemExample;