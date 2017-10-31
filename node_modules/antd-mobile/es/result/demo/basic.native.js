import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { Result } from 'antd-mobile';

var ResultExample = function (_React$Component) {
    _inherits(ResultExample, _React$Component);

    function ResultExample() {
        _classCallCheck(this, ResultExample);

        return _possibleConstructorReturn(this, (ResultExample.__proto__ || Object.getPrototypeOf(ResultExample)).apply(this, arguments));
    }

    _createClass(ResultExample, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                ScrollView,
                { style: { backgroundColor: '#F5F5F9', flex: 1 } },
                React.createElement(
                    Text,
                    { style: { margin: 10, color: '#999' } },
                    'URI \u56FE\u7247'
                ),
                React.createElement(Result, { imgUrl: { uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png' }, title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1' }),
                React.createElement(
                    Text,
                    { style: { margin: 10, color: '#999' } },
                    'Image source'
                ),
                React.createElement(Result, { imgUrl: require('./alipay.png'), title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1' }),
                React.createElement(
                    Text,
                    { style: { margin: 10, color: '#999' } },
                    'Image element'
                ),
                React.createElement(Result, { img: React.createElement(Image, { source: require('./alipay.png'), style: { width: 60, height: 60 } }), title: '\u9A8C\u8BC1\u6210\u529F', message: React.createElement(
                        Text,
                        null,
                        '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1'
                    ) }),
                React.createElement(
                    Text,
                    { style: { margin: 10, color: '#999' } },
                    '\u542B button \u64CD\u4F5C'
                ),
                React.createElement(Result, { img: React.createElement(Image, { source: require('./alipay.png'), style: { width: 60, height: 60 } }), title: '\u9A8C\u8BC1\u6210\u529F', message: '\u6240\u63D0\u4EA4\u5185\u5BB9\u5DF2\u6210\u529F\u5B8C\u6210\u9A8C\u8BC1', buttonText: '\u5B8C\u6210', buttonType: 'primary', buttonClick: function buttonClick(e) {
                        return alert(e.toString());
                    } })
            );
        }
    }]);

    return ResultExample;
}(React.Component);

export default ResultExample;